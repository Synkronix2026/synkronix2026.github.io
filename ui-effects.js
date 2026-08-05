// ============================================================
// Shared UI effects for SYNKRONIX '26 symposium site
// - Synthesized click sound (Web Audio API)
// - Neon triangular custom cursor with electric zap
// - Hacker/terminal boot sequence with cybernetic sound
// - Hamburger drawer with flip-card events
// - Scroll reveal, scrollspy, back-to-top
// ============================================================
(function () {
  "use strict";

  var audioCtx;

  function getAudioCtx() {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  }

  function playClickSound() {
    try {
      var ctx = getAudioCtx();
      var o = ctx.createOscillator();
      var g = ctx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(760, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(360, ctx.currentTime + 0.09);
      g.gain.setValueAtTime(0.09, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
      o.connect(g);
      g.connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.14);
    } catch (e) {}
  }

  function playCyberBootSound() {
    try {
      var ctx = getAudioCtx();
      var now = ctx.currentTime;

      var sweep = ctx.createOscillator();
      var sweepGain = ctx.createGain();
      sweep.type = "sawtooth";
      sweep.frequency.setValueAtTime(90, now);
      sweep.frequency.exponentialRampToValueAtTime(680, now + 0.9);
      sweepGain.gain.setValueAtTime(0.0001, now);
      sweepGain.gain.exponentialRampToValueAtTime(0.05, now + 0.15);
      sweepGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.95);

      var layer = ctx.createOscillator();
      var layerGain = ctx.createGain();
      layer.type = "square";
      layer.frequency.setValueAtTime(95, now);
      layer.frequency.exponentialRampToValueAtTime(690, now + 0.9);
      layerGain.gain.setValueAtTime(0.0001, now);
      layerGain.gain.exponentialRampToValueAtTime(0.02, now + 0.15);
      layerGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.95);

      var filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(2200, now);

      sweep.connect(sweepGain);
      layer.connect(layerGain);
      sweepGain.connect(filter);
      layerGain.connect(filter);
      filter.connect(ctx.destination);

      sweep.start(now);
      sweep.stop(now + 0.95);
      layer.start(now);
      layer.stop(now + 0.95);

      var blipTimes = [0.55, 1.2];
      for (var bi = 0; bi < blipTimes.length; bi++) {
        (function (t) {
          var blip = ctx.createOscillator();
          var blipGain = ctx.createGain();
          blip.type = "square";
          blip.frequency.setValueAtTime(1200, now + t);
          blip.frequency.exponentialRampToValueAtTime(1900, now + t + 0.05);
          blipGain.gain.setValueAtTime(0.0001, now + t);
          blipGain.gain.exponentialRampToValueAtTime(0.045, now + t + 0.01);
          blipGain.gain.exponentialRampToValueAtTime(0.0001, now + t + 0.09);
          blip.connect(blipGain);
          blipGain.connect(ctx.destination);
          blip.start(now + t);
          blip.stop(now + t + 0.09);
        })(blipTimes[bi]);
      }
    } catch (e) {}
  }

  function spawnSparkles(x, y) {
    var count = 8;
    for (var i = 0; i < count; i++) {
      var s = document.createElement("span");
      s.className = "ui-spark";
      var angle = ((Math.PI * 2) / count) * i + Math.random() * 0.4;
      var dist = 24 + Math.random() * 20;
      s.style.setProperty("--dx", Math.cos(angle) * dist + "px");
      s.style.setProperty("--dy", Math.sin(angle) * dist + "px");
      s.style.left = x + "px";
      s.style.top = y + "px";
      document.body.appendChild(s);
      (function (el) {
        el.addEventListener("animationend", function () { el.remove(); });
      })(s);
    }
  }

  function spawnElectricBurst(x, y) {
    var ring = document.createElement("span");
    ring.className = "ui-electric-ring";
    ring.style.left = x + "px";
    ring.style.top = y + "px";
    document.body.appendChild(ring);
    ring.addEventListener("animationend", function () { ring.remove(); });

    var boltCount = 6;
    for (var i = 0; i < boltCount; i++) {
      var bolt = document.createElement("span");
      bolt.className = "ui-electric-bolt";
      var angle = ((Math.PI * 2) / boltCount) * i + Math.random() * 0.5;
      var dist = 30 + Math.random() * 26;
      bolt.style.setProperty("--dx", Math.cos(angle) * dist + "px");
      bolt.style.setProperty("--dy", Math.sin(angle) * dist + "px");
      bolt.style.setProperty("--rot", (Math.random() * 360) + "deg");
      bolt.style.left = x + "px";
      bolt.style.top = y + "px";
      document.body.appendChild(bolt);
      (function (el) {
        el.addEventListener("animationend", function () { el.remove(); });
      })(bolt);
    }
  }

  var EFFECT_SELECTOR = ".btn, .cat-btn, .global-menu-toggle, .drawer-flip, .drawer-close";

  document.addEventListener("click", function (e) {
    spawnElectricBurst(e.clientX, e.clientY);
    var el = e.target.closest(EFFECT_SELECTOR);
    if (!el) return;
    playClickSound();
    var rect = el.getBoundingClientRect();
    spawnSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2);
  });

  function buildCursorUrl(svg) {
    return "url(\"data:image/svg+xml," + encodeURIComponent(svg) + "\")";
  }

  var triCursor =
    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">' +
    '<polygon points="2,2 2,25 18,17" fill="#5B8DEF" stroke="#BFE3FF" stroke-width="1.3"/>' +
    '</svg>';

  var triCursorHover =
    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">' +
    '<polygon points="2,2 2,25 18,17" fill="#FFC857" stroke="#FFF3D6" stroke-width="1.3"/>' +
    '</svg>';

  var cursorCssLines = [
    'html, body { cursor: ' + buildCursorUrl(triCursor) + ' 2 2, auto; }',
    'a, button, .btn, .cat-btn, .global-menu-toggle, .drawer-flip, .drawer-close,',
    'input, select, textarea, [role="button"], summary, label {',
    '  cursor: ' + buildCursorUrl(triCursorHover) + ' 2 2, pointer;',
    '}',
    '.ui-electric-ring {',
    '  position:fixed; width:10px; height:10px; margin:-5px 0 0 -5px;',
    '  border-radius:50%; pointer-events:none; z-index:400;',
    '  border:2px solid #BFE3FF;',
    '  animation:ui-electric-ring-anim 0.45s ease-out forwards;',
    '}',
    '@keyframes ui-electric-ring-anim {',
    '  0%{ transform:scale(0.3); opacity:1; }',
    '  100%{ transform:scale(4.5); opacity:0; }',
    '}',
    '.ui-electric-bolt {',
    '  position:fixed; width:3px; height:16px; margin:-8px 0 0 -1.5px;',
    '  pointer-events:none; z-index:400;',
    '  background:linear-gradient(180deg, #EAF4FF, #5B8DEF 55%, transparent);',
    '  clip-path:polygon(50% 0%, 100% 35%, 60% 40%, 100% 100%, 0% 55%, 45% 50%);',
    '  transform:rotate(var(--rot,0deg));',
    '  animation:ui-electric-bolt-anim 0.5s ease-out forwards;',
    '}',
    '@keyframes ui-electric-bolt-anim {',
    '  0%{ transform:translate(0,0) rotate(var(--rot,0deg)) scale(1); opacity:1; }',
    '  100%{ transform:translate(var(--dx),var(--dy)) rotate(var(--rot,0deg)) scale(0.3); opacity:0; }',
    '}',
    '.loading-screen {',
    '  position:fixed; inset:0; z-index:999; background:#000;',
    '  display:flex; align-items:center; justify-content:center;',
    '  transition:opacity 0.5s ease, visibility 0.5s ease; overflow:hidden;',
    '}',
    '.loading-screen.hidden { opacity:0; visibility:hidden; pointer-events:none; }',
    '.loading-screen::before {',
    '  content:""; position:absolute; inset:0; pointer-events:none;',
    '  background:repeating-linear-gradient(',
    '    0deg, rgba(91,141,239,0.05) 0px, rgba(91,141,239,0.05) 1px,',
    '    transparent 1px, transparent 3px',
    '  );',
    '  animation:ui-scanlines 6s linear infinite;',
    '}',
    '@keyframes ui-scanlines { 0%{ background-position:0 0; } 100%{ background-position:0 120px; } }',
    '.terminal-boot {',
    '  width:min(560px, 88vw); color:#5B8DEF;',
    '  font-family:"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;',
    '  font-size:0.95rem; line-height:1.7;',
    '  text-shadow:0 0 6px rgba(91,141,239,0.65);',
    '}',
    '.terminal-boot pre { margin:0; white-space:pre-wrap; word-break:break-word; }',
    '.terminal-boot .boot-cursor {',
    '  display:inline-block; margin-left:2px;',
    '  animation:ui-cursor-blink 0.9s steps(1) infinite;',
    '}',
    '@keyframes ui-cursor-blink { 50%{ opacity:0; } }',
    'html.ui-no-scroll, html.ui-no-scroll body { overflow:hidden; height:100%; }',
    '.back-to-top {',
    '  position:fixed; right:1.1rem; bottom:1.1rem; z-index:50;',
    '  width:44px; height:44px; border-radius:50%;',
    '  background:#12151C; border:1px solid #232830; color:#5B8DEF;',
    '  display:flex; align-items:center; justify-content:center; font-size:1.1rem;',
    '  cursor:pointer; opacity:0; visibility:hidden; transform:translateY(10px);',
    '  transition:opacity 0.25s ease, transform 0.25s ease, border-color 0.2s, visibility 0.25s;',
    '  box-shadow:0 10px 22px -12px rgba(0,0,0,0.8);',
    '}',
    '.back-to-top.show { opacity:1; visibility:visible; transform:translateY(0); }',
    '.back-to-top:hover { border-color:#5B8DEF; box-shadow:0 12px 26px -10px rgba(91,141,239,0.5); }'
  ];

  var cursorStyle = document.createElement("style");
  cursorStyle.textContent = cursorCssLines.join("\n");
  document.head.appendChild(cursorStyle);

  var BOOT_LINES = [
    "> initializing SYNKRONIX '26 interface...",
    "> establishing secure connection...",
    "> connection established",
    "> loading event manifest...",
    "> 6 events found (3 technical, 3 non-technical)",
    "> access granted",
    "> welcome."
  ];

  function typeLine(container, text, cb) {
    var lineEl = document.createElement("div");
    container.appendChild(lineEl);
    var i = 0;
    (function step() {
      lineEl.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) {
        setTimeout(step, 14 + Math.random() * 18);
      } else {
        cb();
      }
    })();
  }

  function runBootSequence(onDone) {
    var bootLines = document.getElementById("bootLines");
    if (!bootLines) { onDone(); return; }
    var idx = 0;
    (function nextLine() {
      if (idx >= BOOT_LINES.length) {
        setTimeout(onDone, 350);
        return;
      }
      typeLine(bootLines, BOOT_LINES[idx], function () {
        idx++;
        setTimeout(nextLine, 140);
      });
    })();
  }

  var BOOT_SEEN_KEY = "synkronix26_boot_seen_v3";

  function hideLoadingScreen() {
    var el = document.getElementById("loadingScreen");
    if (!el) return;
    var firstVisit = false;
    try {
      firstVisit = !window.localStorage.getItem(BOOT_SEEN_KEY);
    } catch (e) {
      firstVisit = false;
    }
    if (firstVisit) {
      try { window.localStorage.setItem(BOOT_SEEN_KEY, "1"); } catch (e2) {}
      playCyberBootSound();
      runBootSequence(function () {
        el.classList.add("hidden");
      });
    } else {
      setTimeout(function () {
        el.classList.add("hidden");
      }, 400);
    }
  }

  // ============================================================
  // FLIP CARD BUILDER - fixed height, no overlap
  // Fee amount removed per request.
  // ============================================================
  function buildEventFlipCard(ev) {
    var card = document.createElement("div");
    card.className = "drawer-flip";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", "false");
    card.setAttribute("aria-label", ev.title + " - tap for details");

    var html =
      '<div class="drawer-flip-inner">' +
        '<div class="drawer-face drawer-front">' +
          '<span class="item-title">' + ev.title + '</span>' +
          '<span class="tap-hint">Tap for details</span>' +
        '</div>' +
        '<div class="drawer-face drawer-back">' +
          '<p>' + ev.blurb + '</p>' +
          '<div>' +
            '<a class="btn-small" href="event.html?slug=' + ev.slug + '">Register</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    card.innerHTML = html;

    function toggle() {
      var flipped = card.classList.toggle("flipped");
      card.setAttribute("aria-pressed", flipped ? "true" : "false");
    }

    card.addEventListener("click", function (e) {
      if (e.target.closest("a")) return;
      toggle();
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });

    return card;
  }

  function renderEventsList(listEl, titleEl, events, category) {
    if (!listEl) return;
    listEl.innerHTML = "";
    if (category) {
      if (titleEl) titleEl.textContent = category + " events";
      var filtered = events.filter(function (ev) { return ev.category === category; });
      if (filtered.length === 0 && events.length > 0) {
        for (var i = 0; i < events.length; i++) {
          listEl.appendChild(buildEventFlipCard(events[i]));
        }
      } else {
        for (var j = 0; j < filtered.length; j++) {
          listEl.appendChild(buildEventFlipCard(filtered[j]));
        }
      }
    } else {
      if (titleEl) titleEl.textContent = "All events";
      var cats = [];
      for (var k = 0; k < events.length; k++) {
        if (cats.indexOf(events[k].category) === -1) {
          cats.push(events[k].category);
        }
      }
      for (var m = 0; m < cats.length; m++) {
        var cat = cats[m];
        var heading = document.createElement("div");
        heading.className = "drawer-group-heading";
        heading.textContent = cat;
        listEl.appendChild(heading);
        var catEvents = events.filter(function (ev) { return ev.category === cat; });
        for (var n = 0; n < catEvents.length; n++) {
          listEl.appendChild(buildEventFlipCard(catEvents[n]));
        }
      }
    }
  }

  function initScrollReveal(selector) {
    var els = document.querySelectorAll(selector || ".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      for (var i = 0; i < els.length; i++) {
        els[i].classList.add("in-view");
      }
      return;
    }
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          o.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
    for (var j = 0; j < els.length; j++) {
      obs.observe(els[j]);
    }
  }

  function initBackToTop() {
    if (document.querySelector(".back-to-top")) return;
    var btn = document.createElement("button");
    btn.className = "back-to-top";
    btn.setAttribute("aria-label", "Back to top");
    btn.innerHTML = "&#8593;";
    document.body.appendChild(btn);
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", function () {
      btn.classList.toggle("show", window.scrollY > window.innerHeight * 0.6);
    }, { passive: true });
  }

  function initScrollSpy(navLinkSelector, sectionSelector) {
    var links = Array.prototype.slice.call(document.querySelectorAll(navLinkSelector));
    var sections = Array.prototype.slice.call(document.querySelectorAll(sectionSelector));
    if (!links.length || !sections.length || !("IntersectionObserver" in window)) return;

    function linkFor(id) {
      return links.filter(function (a) { return a.getAttribute("href") === "#" + id; });
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (a) { a.classList.remove("active"); });
          linkFor(entry.target.id).forEach(function (a) { a.classList.add("active"); });
        }
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

    for (var i = 0; i < sections.length; i++) {
      obs.observe(sections[i]);
    }
  }

  window.UIEffects = {
    playClickSound: playClickSound,
    playCyberBootSound: playCyberBootSound,
    spawnSparkles: spawnSparkles,
    spawnElectricBurst: spawnElectricBurst,
    hideLoadingScreen: hideLoadingScreen,
    buildEventFlipCard: buildEventFlipCard,
    renderEventsList: renderEventsList,
    initScrollReveal: initScrollReveal,
    initBackToTop: initBackToTop,
    initScrollSpy: initScrollSpy
  };

  if (document.readyState === "complete") {
    hideLoadingScreen();
    initBackToTop();
  } else {
    window.addEventListener("load", function () {
      hideLoadingScreen();
      initBackToTop();
    });
  }
})();
