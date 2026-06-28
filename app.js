/* ==========================================================================
   OXG Interactive Scripts - Minimalist SpaceX Style
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-active');
      menuToggle.classList.toggle('active');

      const bars = menuToggle.querySelectorAll('.bar');
      if (menuToggle.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
      } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      }
    });

    // Close menu when clicking items
    navMenu.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        navMenu.classList.remove('mobile-active');
        menuToggle.classList.remove('active');
        menuToggle.querySelectorAll('.bar').forEach(bar => bar.style.transform = 'none');
        menuToggle.querySelectorAll('.bar')[1].style.opacity = '1';
      });
    });
  }

  // --- Stats Counter Scroll Animation ---
  const statValues = document.querySelectorAll('.stat-val');

  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'), 10);
    const duration = 2000; // ms
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing out quadratic
      const ease = progress * (2 - progress);
      const currentVal = Math.floor(ease * target);

      element.textContent = currentVal.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        element.textContent = target.toLocaleString();
      }
    };

    requestAnimationFrame(updateCount);
  };

  // Intersection Observer
  const observerOptions = {
    root: document.querySelector('.scroll-container').offsetParent ? document.querySelector('.scroll-container') : null,
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.stat-val');
        counters.forEach(counter => {
          if (!counter.classList.contains('counted')) {
            counter.classList.add('counted');
            animateCounter(counter);
          }
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll('.snap-section').forEach(section => {
    observer.observe(section);
  });

});

/* ==========================================================================
   OXG Hero – Orbital Network  (Best-in-class canvas 2D animation)
   Architecture:
     · Two tilted 3-D orbital rings of hex cells, rotating in opposite dirs
     · Real Natural Earth continent outlines via D3-geo + world-atlas CDN
     · Earth slowly rotates; has atmospheric limb glow + terminator shadow
     · Active satellite cells pulse and emit curved signal beams to earth
     · Dashed orbital ellipses show the two orbital planes
     · Twinkling star field
     · Proper depth sorting: cells pass behind & in front of earth
   ========================================================================== */
(function () {
  'use strict';

  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // ── Constants ───────────────────────────────────────────────────────────────
  const D2R = Math.PI / 180;
  const GLOBE_FRAC = 0.285;       // globe radius / min(W, H)
  const OUTER_FRAC = 0.40;        // outer edge of hex field
  const STAR_N = 160;

  const HEX_SIZE = 9;
  const GAP = 2;

  const EARTH_ROT_SPD = 0.000016;   // rad/ms  (very slow, ~10° per minute)

  // ── Mutable state ───────────────────────────────────────────────────────────
  let W, H, cx, cy, globeR, outerR, dpr = 1;
  let stars = [];
  let hexes = [];
  let landFeature = null;
  let geoProj = null;

  // ── Resize / setup ──────────────────────────────────────────────────────────
  function resize() {
    dpr = window.devicePixelRatio || 1;
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    cx = W * 0.64;
    cy = H * 0.50;
    globeR = Math.min(W, H) * GLOBE_FRAC;
    outerR = Math.min(W, H) * OUTER_FRAC;
    buildStars();
    buildHexGrid();
    if (geoProj) geoProj.scale(globeR).translate([cx, cy]);
  }

  // ── Stars ───────────────────────────────────────────────────────────────────
  function buildStars() {
    stars = Array.from({ length: STAR_N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 0.25 + Math.random() * 0.85,
      a: 0.04 + Math.random() * 0.30,
      tw: Math.random() * Math.PI * 2,       // twinkle phase
      ts: 0.0004 + Math.random() * 0.0009,   // twinkle speed
    }));
  }

  // ── Hex Grid ─────────────────────────────────────────────────────────────────
  function buildHexGrid() {
    hexes = [];
    const w = (HEX_SIZE * 2 + GAP) * Math.cos(Math.PI / 6);
    const h = HEX_SIZE * 1.5 + GAP;
    const cols = Math.ceil(outerR * 2 / w);
    const rows = Math.ceil(outerR * 2 / h);

    for (let row = -rows; row <= rows; row++) {
      for (let col = -cols; col <= cols; col++) {
        const hx = col * w + (row % 2 ? w / 2 : 0);
        const hy = row * h;
        const dist = Math.sqrt(hx * hx + hy * hy);

        if (dist > globeR + HEX_SIZE && dist < outerR) {
          // Calculate opacity fade based on distance from globe
          // Fade in starting near globe, fade out near outerR
          const edgeDist = Math.min(dist - globeR, outerR - dist);
          const maxFade = 40; // distance over which it fades in/out
          let opacity = edgeDist > maxFade ? 1 : (edgeDist / maxFade);
          // Calculate angle relative to center for the revolving effect
          const angle = Math.atan2(hy, hx);

          hexes.push({
            x: cx + hx,
            y: cy + hy,
            dist,
            angle,
            opacity: Math.max(0, opacity),
            pOff: Math.random() * Math.PI * 2 // for subtle pulsing
          });
        }
      }
    }
  }

  // ── Load geographic land data (once) ────────────────────────────────────────
  fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json')
    .then(r => r.json())
    .then(world => {
      if (typeof topojson === 'undefined' || typeof d3 === 'undefined') return;
      landFeature = topojson.feature(world, world.objects.land);
      geoProj = d3.geoOrthographic()
        .rotate([-80, -10])   // centre on 80°E, 10°N
        .clipAngle(90)
        .scale(globeR)
        .translate([cx, cy]);
    })
    .catch(() => { /* no-op – globe still renders as a plain circle */ });

  // ── Drawing helpers ──────────────────────────────────────────────────────────
  function hexPath(x, y, size) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      i === 0
        ? ctx.moveTo(x + size * Math.cos(a), y + size * Math.sin(a))
        : ctx.lineTo(x + size * Math.cos(a), y + size * Math.sin(a));
    }
    ctx.closePath();
  }

  function drawHexGrid(ts) {
    // Speed of the revolution
    const revolveSpeed = 0.0008;

    hexes.forEach(hex => {
      // 1. Base subtle pulsing
      const basePulse = 0.03 + 0.03 * Math.sin(ts * 0.0015 + hex.pOff);

      // 2. Revolving wave sweeping around the earth
      // We use Math.sin() with the hex angle minus time to create a rotating wave.
      // Math.max(0, ...) ensures only a crest of the wave is visible.
      const wave = Math.max(0, Math.sin(hex.angle - ts * revolveSpeed));

      // Combine base pulse and a bright sweeping wave
      const pulse = basePulse + (wave * 0.15);

      const strokeA = hex.opacity * pulse;

      hexPath(hex.x, hex.y, HEX_SIZE);
      ctx.strokeStyle = `rgba(255, 255, 255, ${strokeA})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    });
  }

  // ── Earth ────────────────────────────────────────────────────────────────────
  function drawEarth(ts) {
    ctx.save();

    // 1. Black ocean fill
    ctx.beginPath();
    ctx.arc(cx, cy, globeR, 0, Math.PI * 2);
    ctx.fillStyle = '#000000';
    ctx.fill();

    // 2. Lit-hemisphere highlight (upper-left warm glow)
    const hl = ctx.createRadialGradient(
      cx - globeR * 0.30, cy - globeR * 0.32, 0,
      cx, cy, globeR
    );
    hl.addColorStop(0, 'rgba(14,24,54,0.55)');
    hl.addColorStop(0.65, 'rgba(5,10,25,0.15)');
    hl.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = hl;
    ctx.fill();

    // 3. Continent outlines via D3 + world-atlas (real geographic data)
    if (landFeature && geoProj) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, globeR - 0.8, 0, Math.PI * 2);
      ctx.clip();

      // Rotate longitude offset from timestamp (frame-rate independent)
      const lonOffset = -(80 + (ts * EARTH_ROT_SPD) * (180 / Math.PI));
      geoProj.rotate([lonOffset, -10]).scale(globeR).translate([cx, cy]);

      const pg = d3.geoPath().projection(geoProj).context(ctx);
      ctx.beginPath();
      pg(landFeature);
      ctx.strokeStyle = 'rgba(255,255,255,0.22)';
      ctx.lineWidth = 0.6;
      ctx.stroke();
      ctx.restore();
    }

    // 4. Terminator — dark-side vignette (lower-right)
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, globeR, 0, Math.PI * 2);
    ctx.clip();
    const term = ctx.createRadialGradient(
      cx + globeR * 0.38, cy + globeR * 0.18, globeR * 0.1,
      cx + globeR * 0.38, cy + globeR * 0.18, globeR * 1.55
    );
    term.addColorStop(0, 'rgba(0,0,0,0)');
    term.addColorStop(0.55, 'rgba(0,0,0,0)');
    term.addColorStop(1, 'rgba(0,0,0,0.52)');
    ctx.fillStyle = term;
    ctx.fillRect(cx - globeR, cy - globeR, globeR * 2, globeR * 2);
    ctx.restore();

    // 5. Atmospheric limb glow — blue halo at globe edge
    const atm = ctx.createRadialGradient(cx, cy, globeR * 0.82, cx, cy, globeR * 1.22);
    atm.addColorStop(0, 'rgba(50,115,235,0)');
    atm.addColorStop(0.38, 'rgba(50,115,235,0.085)');
    atm.addColorStop(0.72, 'rgba(30,85,210,0.038)');
    atm.addColorStop(1, 'rgba(20,60,190,0)');
    ctx.beginPath();
    ctx.arc(cx, cy, globeR * 1.22, 0, Math.PI * 2);
    ctx.fillStyle = atm;
    ctx.fill();

    // 6. Crisp globe outline
    ctx.beginPath();
    ctx.arc(cx, cy, globeR, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,0.20)';
    ctx.lineWidth = 0.9;
    ctx.stroke();

    ctx.restore();
  }

  // ── Main animation loop ───────────────────────────────────────────────────────
  function animate(ts) {
    ctx.clearRect(0, 0, W, H);

    // 1. Twinkling star field
    stars.forEach(s => {
      const br = 0.55 + 0.45 * Math.sin(ts * s.ts + s.tw);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.a * br})`;
      ctx.fill();
    });

    // 2. Surrounding Hex Grid
    drawHexGrid(ts);

    // 3. Earth (continents, atmosphere, terminator)
    drawEarth(ts);

    requestAnimationFrame(animate);
  }

  // ── Init ─────────────────────────────────────────────────────────────────────
  window.addEventListener('resize', () => resize());
  resize();
  requestAnimationFrame(animate);

})();
