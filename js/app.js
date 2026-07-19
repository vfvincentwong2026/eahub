/* =========================================================
   EAHub · HoloSophy 知识库 — 极简展示层
   数据源: holosophy-mcp Worker API → https://mcp.eastastar.com
   无框架、无构建步骤；API 一律使用绝对地址。
   ========================================================= */
(function () {
  'use strict';

  var API_BASE = 'https://mcp.eastastar.com';
  var apiMeta = document.querySelector('meta[name="eahub-api"]');
  if (apiMeta && apiMeta.content) API_BASE = apiMeta.content.replace(/\/+$/, '');

  var SEARCH_PATH = '/api/knowledge/search';
  var CATEGORIES = ['全部', '概念', '量子力学相关', '历史地理相关', '天文新玄学'];
  var DEBOUNCE_MS = 300;
  var LIMIT = 500;

  var state = {
    items: [],
    activeCategory: '全部',
    query: '',
    loading: false,
    view: 'list'
  };

  var els = {
    input: document.getElementById('search-input'),
    chips: document.getElementById('category-chips'),
    grid: document.getElementById('card-grid'),
    status: document.getElementById('status-line'),
    overlay: document.getElementById('modal-overlay'),
    modalCategory: document.getElementById('modal-category'),
    modalTitle: document.getElementById('modal-title'),
    modalCn: document.getElementById('modal-cn'),
    modalTags: document.getElementById('modal-tags'),
    modalBody: document.getElementById('modal-body'),
    modalClose: document.getElementById('modal-close'),
    graphWrap: document.getElementById('graph-wrap'),
    graphContainer: document.getElementById('graph-container'),
    viewBtns: Array.prototype.slice.call(document.querySelectorAll('.view-btn'))
  };

  /* ── 工具函数 ── */

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function splitTags(tags) {
    if (!tags) return [];
    return String(tags).split(',').map(function (t) { return t.trim(); }).filter(Boolean);
  }

  function categoryIndex(cat) {
    var i = CATEGORIES.indexOf(cat);
    return i > 0 ? i - 1 : 0;
  }

  function setStatus(text, isError) {
    els.status.textContent = text;
    els.status.classList.toggle('error', !!isError);
  }

  /* ── 数据获取 ── */

  function fetchKnowledge(q) {
    var url = API_BASE + SEARCH_PATH + '?q=' + encodeURIComponent(q || '') + '&limit=' + LIMIT;
    return fetch(url, { method: 'GET', headers: { 'Accept': 'application/json' } })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (json) {
        if (!json || json.success !== true || !Array.isArray(json.data)) {
          throw new Error('unexpected payload');
        }
        return json;
      });
  }

  function doSearch(q) {
    state.query = q;
    state.loading = true;
    setStatus('正在检索…');
    fetchKnowledge(q)
      .then(function (json) {
        state.items = json.data;
        state.loading = false;
        renderChips();
        renderCards();
        var total = typeof json.total === 'number' ? json.total : json.data.length;
        setStatus(q ? ('「' + q + '」共 ' + total + ' 条结果') : ('共收录 ' + total + ' 条知识'));
      })
      .catch(function () {
        state.loading = false;
        state.items = [];
        renderChips();
        renderCards();
        setStatus('数据加载失败，请检查网络后重试。', true);
      });
  }

  /* ── 分类 chips ── */

  function renderChips() {
    var counts = {};
    state.items.forEach(function (item) {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    els.chips.textContent = '';
    CATEGORIES.forEach(function (cat) {
      var count = cat === '全部' ? state.items.length : (counts[cat] || 0);
      var chip = el('button', 'chip' + (state.activeCategory === cat ? ' active' : ''));
      chip.type = 'button';
      chip.appendChild(document.createTextNode(cat));
      chip.appendChild(el('span', 'chip-count', String(count)));
      chip.addEventListener('click', function () {
        state.activeCategory = cat;
        renderChips();
        renderCards();
      });
      els.chips.appendChild(chip);
    });
  }

  /* ── 卡片网格 ── */

  function visibleItems() {
    if (state.activeCategory === '全部') return state.items;
    return state.items.filter(function (item) { return item.category === state.activeCategory; });
  }

  function renderCards() {
    var items = visibleItems();
    els.grid.textContent = '';
    if (!state.loading && items.length === 0) {
      els.grid.appendChild(el('p', 'empty-hint', '没有匹配的内容，换个关键词或分类试试。'));
      updateGraph();
      return;
    }
    items.forEach(function (item) {
      var card = el('article', 'card');
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', '查看详情：' + (item.name || ''));

      var top = el('div', 'card-top');
      top.appendChild(el('span', 'badge cat-' + categoryIndex(item.category), item.category || '未分类'));
      top.appendChild(el('span', 'card-id', '#' + item.id));

      var title = el('h3', 'card-title', item.name || '(未命名)');

      var summary = el('p', 'card-summary', item.summary || '暂无摘要。');

      var tagBox = el('div', 'card-tags');
      splitTags(item.tags).slice(0, 6).forEach(function (t) {
        tagBox.appendChild(el('span', 'tag', t));
      });

      card.appendChild(top);
      card.appendChild(title);
      card.appendChild(summary);
      card.appendChild(tagBox);

      card.addEventListener('click', function () { openModal(item); });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(item);
        }
      });

      els.grid.appendChild(card);
    });

    updateGraph();
  }

  /* ── 图谱视图（force-graph 2D，库缺失时降级回列表） ── */

  var VIEW_KEY = 'eahub-view';
  var graphState = { fg: null, failed: false, needsFit: true };
  var CAT_COLOR_VARS = ['--cat-concept', '--cat-quantum', '--cat-history', '--cat-astro'];
  var CAT_COLOR_FALLBACK = ['#c9a04f', '#6fa8c9', '#b08d68', '#9d8bd4'];
  var catColorCache = null;

  function catColor(cat) {
    if (!catColorCache) {
      catColorCache = CAT_COLOR_FALLBACK.slice();
      try {
        var cs = getComputedStyle(document.documentElement);
        CAT_COLOR_VARS.forEach(function (v, i) {
          var val = cs.getPropertyValue(v).trim();
          if (val) catColorCache[i] = val;
        });
      } catch (e) { /* 忽略，用回退色 */ }
    }
    var i = categoryIndex(cat);
    return catColorCache[i] || catColorCache[0];
  }

  var toastTimer = null;
  function showToast(msg) {
    var t = document.getElementById('eahub-toast');
    if (!t) {
      t = el('div', 'toast');
      t.id = 'eahub-toast';
      t.setAttribute('role', 'alert');
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 3000);
  }

  function nodeDegreeMap(items) {
    var names = {};
    items.forEach(function (it) { if (it && it.name) names[it.name] = true; });
    var deg = {};
    var links = [];
    var seen = {};
    items.forEach(function (it) {
      if (!it || !it.name) return;
      splitTags(it.links).forEach(function (target) {
        if (!names[target] || target === it.name) return;
        var key = it.name < target ? it.name + '' + target : target + '' + it.name;
        if (seen[key]) return;
        seen[key] = true;
        links.push({ source: it.name, target: target });
        deg[it.name] = (deg[it.name] || 0) + 1;
        deg[target] = (deg[target] || 0) + 1;
      });
    });
    return { deg: deg, links: links };
  }

  function buildGraphData(items) {
    var built = nodeDegreeMap(items);
    var nodes = items
      .filter(function (it) { return it && it.name; })
      .map(function (it) {
        return { id: it.name, name: it.name, category: it.category, degree: built.deg[it.name] || 0, item: it };
      });
    var maxDeg = 1;
    nodes.forEach(function (n) { if (n.degree > maxDeg) maxDeg = n.degree; });
    nodes.forEach(function (n) {
      n.size = 2.6 + 3.4 * Math.sqrt(n.degree / maxDeg);
      n.hot = n.degree >= 15;
    });
    return { nodes: nodes, links: built.links };
  }

  function drawGraphNode(node, ctx, globalScale) {
    var color = catColor(node.category);
    var r = node.size;

    ctx.beginPath();
    ctx.arc(node.x, node.y, r + 1.2, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'rgba(7, 10, 19, 0.55)';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(node.x, node.y, r, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();

    /* 标签：高度数节点常显，其余随缩放渐显 */
    var label = node.name;
    var alpha;
    if (node.hot) {
      alpha = 0.95;
    } else {
      alpha = Math.min(Math.max((globalScale - 1.15) / 0.9, 0), 1) * 0.9;
    }
    if (alpha > 0.02 && label) {
      var fontSize = Math.max(10 / globalScale, 2.4) + (node.hot ? 0.6 : 0);
      ctx.font = fontSize + 'px "Noto Sans SC", "PingFang SC", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.globalAlpha = alpha * 0.85;
      ctx.fillStyle = '#05070d';
      ctx.fillText(label, node.x, node.y + r + 1.4 + 0.5);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#ece7db';
      ctx.fillText(label, node.x, node.y + r + 1.4);
      ctx.globalAlpha = 1;
    }
  }

  function paintNodePointerArea(node, color, ctx) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(node.x, node.y, Math.max(node.size + 2.5, 4), 0, 2 * Math.PI, false);
    ctx.fill();
  }

  function ensureGraph() {
    if (graphState.fg) return true;
    if (graphState.failed) return false;
    if (typeof window.ForceGraph !== 'function') {
      graphState.failed = true;
      return false;
    }
    try {
      var fg = window.ForceGraph()(els.graphContainer);
      fg.backgroundColor('rgba(0,0,0,0)')
        .nodeCanvasObject(drawGraphNode)
        .nodePointerAreaPaint(paintNodePointerArea)
        .nodeLabel(function (n) { return n.name + (n.degree ? ' · 连接 ' + n.degree : ''); })
        .linkColor(function () { return 'rgba(165, 173, 189, 0.16)'; })
        .linkWidth(0.5)
        .linkDirectionalParticles(0)
        .onNodeClick(function (n) {
          if (n && n.item) openModal(n.item);
        })
        .onNodeHover(function (n) {
          els.graphContainer.style.cursor = n ? 'pointer' : '';
        })
        .cooldownTicks(120)
        .d3VelocityDecay(0.32);
      graphState.fg = fg;
      resizeGraph();
      return true;
    } catch (e) {
      graphState.failed = true;
      graphState.fg = null;
      return false;
    }
  }

  function resizeGraph() {
    if (!graphState.fg || !els.graphWrap) return;
    var w = els.graphWrap.clientWidth;
    var h = els.graphWrap.clientHeight;
    if (w > 0 && h > 0) graphState.fg.width(w).height(h);
  }

  window.addEventListener('resize', resizeGraph);

  function updateGraph() {
    if (state.view !== 'graph') return;
    if (!ensureGraph()) return;
    var data = buildGraphData(visibleItems());
    graphState.fg.graphData(data);
    resizeGraph();
    if (graphState.needsFit && data.nodes.length > 0) {
      graphState.needsFit = false;
      setTimeout(function () {
        if (graphState.fg) {
          try { graphState.fg.zoomToFit(500, 44); } catch (e) { /* 忽略 */ }
        }
      }, 700);
    }
  }

  function setView(view, skipSave) {
    if (view === 'graph' && !ensureGraph()) {
      showToast('图谱模式暂不可用，已切回列表');
      view = 'list';
    }
    state.view = view;
    if (!skipSave) {
      try { localStorage.setItem(VIEW_KEY, view); } catch (e) { /* 忽略 */ }
    }
    els.viewBtns.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-view') === view);
    });
    var isGraph = view === 'graph';
    els.grid.hidden = isGraph;
    els.graphWrap.hidden = !isGraph;
    if (isGraph) {
      graphState.needsFit = true;
      updateGraph();
    }
  }

  els.viewBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setView(btn.getAttribute('data-view'));
    });
  });

  (function restoreView() {
    var saved = 'list';
    try { saved = localStorage.getItem(VIEW_KEY) || 'list'; } catch (e) { /* 忽略 */ }
    if (saved === 'graph') setView('graph', true);
  })();

  /* ── Markdown 渲染（marked + DOMPurify，CDN 失败降级 <pre>） ── */

  function stripFrontmatter(text) {
    return text.replace(/^\s*---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
  }

  function renderMarkdown(rawText) {
    var cleaned = stripFrontmatter(String(rawText || ''));

    if (window.marked && window.DOMPurify) {
      try {
        var latexStore = [];
        var pre = cleaned.replace(/\$\$([\s\S]+?)\$\$/g, function (m, code) {
          latexStore.push(code);
          return '%%LATEX_BLOCK_' + (latexStore.length - 1) + '%%';
        });

        pre = pre.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, function (m, target, alias) {
          var q = String(target).trim();
          var label = String(alias || target).trim();
          return '<span class="wikilink" data-q="' + escapeHtml(q) + '">' + escapeHtml(label) + '</span>';
        });

        var html = window.marked.parse(pre);
        html = window.DOMPurify.sanitize(html, { ADD_ATTR: ['data-q'] });

        html = html.replace(/%%LATEX_BLOCK_(\d+)%%/g, function (m, i) {
          var code = latexStore[Number(i)] || '';
          return '<pre class="latex-block"><code>' + escapeHtml('$$' + code + '$$') + '</code></pre>';
        });

        return html;
      } catch (err) {
        /* 渲染异常时落入纯文本降级 */
      }
    }
    return '<pre class="raw-fallback">' + escapeHtml(cleaned) + '</pre>';
  }

  /* ── 详情弹层 ── */

  function openModal(item) {
    els.modalCategory.textContent = item.category || '未分类';
    els.modalCategory.className = 'badge cat-' + categoryIndex(item.category);
    els.modalTitle.textContent = item.name || '(未命名)';

    if (item.chinese_name && item.chinese_name !== item.name) {
      els.modalCn.textContent = item.chinese_name;
      els.modalCn.hidden = false;
    } else {
      els.modalCn.hidden = true;
    }

    var tags = splitTags(item.tags);
    els.modalTags.textContent = tags.length ? ('标签 · ' + tags.join(' / ')) : '';

    els.modalBody.innerHTML = renderMarkdown(item.content);
    els.modalBody.scrollTop = 0;

    els.overlay.hidden = false;
    document.body.classList.add('modal-open');
    els.modalClose.focus();
  }

  function closeModal() {
    els.overlay.hidden = true;
    document.body.classList.remove('modal-open');
  }

  els.modalClose.addEventListener('click', closeModal);

  els.overlay.addEventListener('click', function (e) {
    if (e.target === els.overlay) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !els.overlay.hidden) closeModal();
  });

  /* wikilink 点击 → 以词条名搜索并关闭弹层 */
  els.modalBody.addEventListener('click', function (e) {
    var target = e.target;
    var link = target && target.closest ? target.closest('.wikilink') : null;
    if (!link) return;
    var q = link.getAttribute('data-q') || link.textContent.trim();
    closeModal();
    els.input.value = q;
    state.activeCategory = '全部';
    doSearch(q);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    els.input.focus();
  });

  /* ── 搜索输入（防抖 300ms） ── */

  var debounceTimer = null;
  els.input.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      doSearch(els.input.value.trim());
    }, DEBOUNCE_MS);
  });

  /* ── 初始加载 ── */
  doSearch('');
})();
