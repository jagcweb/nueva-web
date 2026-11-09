(() => {
  'use strict';
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const intro = $('.intro');
  if (!motion.matches && !sessionStorageSafe('jagc-intro')) {
    intro.classList.add('is-loading');
    try { sessionStorage.setItem('jagc-intro', '1'); } catch (_) {}
    setTimeout(() => intro.remove(), 1180);
  } else intro.remove();
  function sessionStorageSafe(key) { try { return sessionStorage.getItem(key); } catch (_) { return null; } }

  const themeButton = $('.theme-toggle');
  function updateThemeLabel() {
    const light = document.documentElement.dataset.theme === 'light';
    themeButton.setAttribute('aria-label', light ? 'Activar modo oscuro' : 'Activar modo claro');
    themeButton.title = light ? 'Activar modo oscuro' : 'Activar modo claro';
    $('meta[name="theme-color"]').content = light ? '#f2f3f5' : '#141619';
  }
  updateThemeLabel();
  themeButton.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('jagc-theme', theme); } catch (_) {}
    updateThemeLabel();
  });

  let lenis;
  const menuButton = $('.menu-toggle');
  const menu = $('.mobile-menu');
  function setMenu(open, returnFocus = true) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menÃƒÂº' : 'Abrir menÃƒÂº');
    menu.inert = !open;
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    if (open) {
      lenis?.stop();
      if (window.gsap && !motion.matches) {
        gsap.fromTo(menu, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: .45, ease: 'power3.inOut' });
        gsap.fromTo($$('nav a', menu), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .4, stagger: .06, delay: .12, clearProps: 'transform,opacity' });
      }
      $('nav a', menu).focus({ preventScroll: true });
    } else {
      lenis?.start();
      if (window.gsap) gsap.set(menu, { clearProps: 'clipPath' });
      if (returnFocus) menuButton.focus({ preventScroll: true });
    }
  }
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (menuButton.getAttribute('aria-expanded') !== 'true') return;
    if (event.key === 'Escape') setMenu(false);
    if (event.key === 'Tab') {
      const focusable = [themeButton, menuButton, ...$$('a', menu)];
      const first = focusable[0], last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  matchMedia('(min-width:651px)').addEventListener('change', e => { if (e.matches) setMenu(false, false); });
  $$('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
    const target = $(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    if (menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, false);
    history.replaceState(null, '', link.getAttribute('href'));
    if (lenis && !motion.matches) lenis.scrollTo(target, { offset: -82, duration: 1.1 });
    else target.scrollIntoView({ behavior: 'auto' });
    // Move keyboard focus to the destination without a second scroll.
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
  }));

  const form = $('#contact-form');
  const name = $('#name'), message = $('#message');
  function validateField(field) {
    const error = field === name
      ? (field.value.trim() ? '' : 'Indica tu nombre para poder dirigirme a ti.')
      : (field.value.trim().length >= 10 ? '' : 'CuÃƒÂ©ntame un poco mÃƒÂ¡s: escribe al menos 10 caracteres.');
    field.setAttribute('aria-invalid', String(Boolean(error)));
    $('#' + field.id + '-error').textContent = error;
    return !error;
  }
  [name, message].forEach(field => {
    field.addEventListener('blur', () => { if (field.value || field.getAttribute('aria-invalid') === 'true') validateField(field); });
    field.addEventListener('input', () => { if (field.getAttribute('aria-invalid') === 'true') validateField(field); });
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    const valid = [name, message].map(validateField);
    if (valid.includes(false)) {
      $('.form-status').textContent = 'Revisa los campos indicados antes de continuar.';
      $('[aria-invalid="true"]', form).focus();
      return;
    }
    const company = $('#company').value.trim();
    const mode = $('input[name="modalidad"]:checked', form).value;
    const body = `Hola, JosÃƒÂ© Antonio:\n\nSoy ${name.value.trim()}.${company ? '\nEmpresa: ' + company : ''}\nForma de trabajar: ${mode}\n\n${message.value.trim()}\n`;
    const url = 'mailto:hola@jagcweb.es?subject=' + encodeURIComponent('Nuevo proyecto Ã‚Â· ' + name.value.trim()) + '&body=' + encodeURIComponent(body);
    const mailLink = document.createElement('a');
    mailLink.href = url;
    mailLink.click();
    $('.form-status').textContent = 'Tu mensaje estÃƒÂ¡ preparado en tu aplicaciÃƒÂ³n de correo. RevÃƒÂ­salo y pulsa Enviar allÃƒÂ­. Si no se abre, puedes escribir a hola@jagcweb.es.';
  });

  const navLinks = $$('.desktop-nav [data-section]');
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        if (link.dataset.section === entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  $$('main > section[id]').forEach(section => sectionObserver.observe(section));

  const viewport = $('.work-viewport');
  const track = $('.work-track');
  const cards = $$('.work-card');
  let galleryTween;
  let galleryIndex = 0;
  function updateGallery(index, progress) {
    galleryIndex = Math.max(0, Math.min(6, index));
    $('#work-current').textContent = String(galleryIndex + 1).padStart(2, '0');
    $('.gallery-progress span').style.transform = `scaleX(${1 / 7 + progress * 6 / 7})`;
    $('.work-prev').disabled = galleryIndex === 0;
    $('.work-next').disabled = galleryIndex === 6;
  }
  function goToWork(index) {
    index = Math.max(0, Math.min(6, index));
    if (galleryTween?.scrollTrigger) {
      const st = galleryTween.scrollTrigger;
      const scroll = st.start + (st.end - st.start) * index / 6;
      if (lenis) lenis.scrollTo(scroll, { duration: .8 });
      else window.scrollTo({ top: scroll, behavior: motion.matches ? 'auto' : 'smooth' });
    } else {
      viewport.scrollTo({ left: cards[index].offsetLeft - cards[0].offsetLeft, behavior: motion.matches ? 'auto' : 'smooth' });
    }
  }
  $('.work-prev').addEventListener('click', () => goToWork(galleryIndex - 1));
  $('.work-next').addEventListener('click', () => goToWork(galleryIndex + 1));
  viewport.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); goToWork(galleryIndex + (e.key === 'ArrowRight' ? 1 : -1)); }
  });
  viewport.addEventListener('scroll', () => {
    if (galleryTween?.scrollTrigger) return;
    const max = viewport.scrollWidth - viewport.clientWidth;
    const progress = max ? viewport.scrollLeft / max : 0;
    updateGallery(Math.round(progress * 6), progress);
  }, { passive: true });
  // A tab into a horizontally pinned project reveals that project as well.
  cards.forEach((card, index) => card.addEventListener('focusin', () => { if (galleryTween?.scrollTrigger) { viewport.scrollLeft = 0; goToWork(index); } }));
  updateGallery(0, 0);

  async function initAnimations() {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    if (window.SplitText) gsap.registerPlugin(SplitText);
    await Promise.race([document.fonts.ready, new Promise(resolve => setTimeout(resolve, 650))]);
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      if (window.Lenis) {
        lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false, anchors: false });
        lenis.on('scroll', ScrollTrigger.update);
        const tick = time => lenis?.raf(time * 1000);
        gsap.ticker.add(tick);
        // Cleanup is registered below with all animation resources.
        lenis._siteTick = tick;
      }
      gsap.ticker.lagSmoothing(0);
      const heroTl = gsap.timeline({ delay: .1 });
      if (window.SplitText) {
        const title = SplitText.create('#hero-title > span', { type: 'chars', mask: 'chars', aria: 'auto' });
        heroTl.from(title.chars, { yPercent: 110, rotate: 5, opacity: 0, duration: .85, stagger: .017, ease: 'power3.out' }, 0);
      } else heroTl.from('#hero-title > span', { y: 35, opacity: 0, stagger: .1, duration: .8 });
      heroTl.from('.hero-description, .hero-copy .button, .hero-secondary', { y: 18, opacity: 0, stagger: .08, duration: .6 }, .35);
      heroTl.from('.window-main', { y: 65, rotate: -12, opacity: 0, duration: 1.1, ease: 'power3.out' }, .15);
      heroTl.from('.window-secondary', { y: 80, rotate: 14, opacity: 0, duration: 1.1, ease: 'power3.out' }, .35);
      gsap.to('.window-main', { y: -12, duration: 3.8, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1.4 });
      gsap.to('.window-secondary', { y: 10, duration: 3.2, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1.4 });
      gsap.to('.orbital-one', { rotate: 150, duration: 48, repeat: -1, ease: 'none' });
      gsap.to('.hero-art', { y: -40, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
      $$('[data-reveal]').forEach(el => {
        if (window.SplitText) {
          SplitText.create(el, { type: 'lines', mask: 'lines', autoSplit: true, onSplit: self => gsap.from(self.lines, { yPercent: 110, rotate: 2, duration: .85, stagger: .1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }) });
        } else gsap.from(el, { y: 35, opacity: 0, duration: .7, scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
      });
      if (window.SplitText) {
        const paragraph = SplitText.create('.illuminate', { type: 'words', aria: 'auto' });
        gsap.from(paragraph.words, { opacity: .22, stagger: .1, ease: 'none', scrollTrigger: { trigger: '.illuminate', start: 'top 85%', end: 'bottom 48%', scrub: .5 } });
      }
      const marqueeTween = gsap.to('.marquee-track', { xPercent: -50, duration: 65, repeat: -1, ease: 'none' });
      const speedTrigger = ScrollTrigger.create({ onUpdate: self => {
        const speed = Math.min(5, 1 + Math.abs(self.getVelocity()) / 600);
        gsap.to(marqueeTween, { timeScale: speed, duration: .2, overwrite: true });
        gsap.to(marqueeTween, { timeScale: 1, duration: 1.2, delay: .2, overwrite: 'auto' });
      }});
      const isMobile = matchMedia('(max-width:650px)').matches;
      gsap.to('.process-line > span', { scaleX: 1, scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.process-steps', start: 'top 75%', end: isMobile ? 'bottom 55%' : 'bottom 40%', scrub: .5 } });
      $$('.process-step').forEach((step, i) => {
        ScrollTrigger.create({ trigger: isMobile ? step : '.process-steps', start: isMobile ? 'top 75%' : `top ${75 - i * 9}%`, toggleClass: 'is-active' });
        gsap.from(step, { y: 28, opacity: 0, duration: .6, delay: isMobile ? 0 : i * .12, scrollTrigger: { trigger: step, start: 'top 88%', once: true } });
      });
      gsap.to('.timeline-rail span', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.timeline', start: 'top 78%', end: 'bottom 65%', scrub: .5 } });
      $$('.timeline article').forEach(article => {
        gsap.from(article, { y: 22, opacity: 0, duration: .6, scrollTrigger: { trigger: article, start: 'top 87%', once: true } });
        if (window.SplitText) {
          const year = SplitText.create($('[data-year]', article), { type: 'chars', mask: 'chars' });
          gsap.from(year.chars, { yPercent: -120, stagger: .035, duration: .65, ease: 'power2.out', scrollTrigger: { trigger: article, start: 'top 87%', once: true } });
        }
      });
      gsap.from('.service-symbol', { rotate: -100, scrollTrigger: { trigger: '.services', start: 'top bottom', end: 'bottom top', scrub: 1 } });
      gsap.from('.contact h2', { scale: .72, xPercent: -3, ease: 'none', scrollTrigger: { trigger: '.contact', start: 'top 95%', end: 'top 25%', scrub: 1 } });
      gsap.from('.contact-question', { rotate: 28, yPercent: 20, scrollTrigger: { trigger: '.contact', start: 'top 90%', end: 'top 30%', scrub: 1 } });
      // The overlay uses CSS theme variables, so changing theme never restarts the page.
      ['.services', '.about'].forEach(selector => {
        gsap.fromTo(selector, { '--section-shade': 1 }, { '--section-shade': 0, immediateRender: false, scrollTrigger: { trigger: selector, start: 'top 95%', end: 'top 35%', scrub: true } });
      });
      gsap.to('.reading-progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } });
      ScrollTrigger.refresh();
      return () => {
        speedTrigger.kill();
        if (lenis) { gsap.ticker.remove(lenis._siteTick); lenis.destroy(); lenis = undefined; }
      };
    });
    mm.add('(min-width:901px) and (min-height:760px) and (prefers-reduced-motion:no-preference)', () => {
      $('.work-section').classList.add('work-desktop');
      const distance = () => track.scrollWidth - viewport.clientWidth + parseFloat(getComputedStyle(viewport).paddingLeft) * 2;
      galleryTween = gsap.to(track, { x: () => -distance(), ease: 'none', scrollTrigger: {
        trigger: '.work-pin', start: 'top 100px', end: () => '+=' + distance(), pin: true, scrub: .8, invalidateOnRefresh: true,
        onUpdate: self => updateGallery(Math.round(self.progress * 6), self.progress)
      }});
      return () => { galleryTween = undefined; $('.work-section').classList.remove('work-desktop'); viewport.scrollLeft = 0; updateGallery(0, 0); };
    });
    mm.add('(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)', () => {
      const cursor = $('.cursor');
      const moveCursorX = gsap.quickTo(cursor, 'x', { duration: .15, ease: 'power3' });
      const moveCursorY = gsap.quickTo(cursor, 'y', { duration: .15, ease: 'power3' });
      function moveCursor(e) { cursor.style.display = 'flex'; moveCursorX(e.clientX); moveCursorY(e.clientY); }
      function hideCursor() { cursor.style.display = 'none'; }
      window.addEventListener('pointermove', moveCursor);
      document.addEventListener('pointerleave', hideCursor);
      const cleanups = [];
      $$('a,button,summary,input,textarea').forEach(el => {
        const enter = () => cursor.classList.add(el.dataset.cursor === 'view' ? 'is-view' : 'is-link');
        const leave = () => cursor.classList.remove('is-view', 'is-link');
        el.addEventListener('pointerenter', enter); el.addEventListener('pointerleave', leave);
        cleanups.push(() => { el.removeEventListener('pointerenter', enter); el.removeEventListener('pointerleave', leave); });
      });
      $$('.tilt').forEach(el => {
        const x = gsap.quickTo(el, 'rotationX', { duration: .5, ease: 'power2' });
        const y = gsap.quickTo(el, 'rotationY', { duration: .5, ease: 'power2' });
        const move = e => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
          x((.5 - py) * 9); y((px - .5) * 10);
          el.style.setProperty('--glow-x', `${px * 100}%`); el.style.setProperty('--glow-y', `${py * 100}%`);
        };
        const leave = () => { x(0); y(0); };
        el.addEventListener('pointermove', move); el.addEventListener('pointerleave', leave);
        cleanups.push(() => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); });
      });
      $$('.magnetic').forEach(el => {
        const x = gsap.quickTo(el, 'x', { duration: .4, ease: 'power3' });
        const y = gsap.quickTo(el, 'y', { duration: .4, ease: 'power3' });
        const move = e => { const r = el.getBoundingClientRect(); x((e.clientX - r.left - r.width / 2) * .13); y((e.clientY - r.top - r.height / 2) * .2); };
        const leave = () => { x(0); y(0); };
        el.addEventListener('pointermove', move); el.addEventListener('pointerleave', leave);
        cleanups.push(() => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); });
      });
      const art = $('.hero-art');
      const parallax = e => { gsap.to(art, { rotationY: (e.clientX / innerWidth - .5) * 7, rotationX: (e.clientY / innerHeight - .5) * -5, duration: 1, overwrite: 'auto' }); };
      $('.hero').addEventListener('pointermove', parallax);
      return () => { cleanups.forEach(cleanup => cleanup()); window.removeEventListener('pointermove', moveCursor); document.removeEventListener('pointerleave', hideCursor); $('.hero').removeEventListener('pointermove', parallax); hideCursor(); };
    });

  }

  function initWebGL() {
    const canvas = $('#hero-canvas');
    if (motion.matches) return;
    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false, antialias: false, powerPreference: 'low-power' });
    if (!gl) return;
    const vertex = `attribute vec2 a_position;void main(){gl_Position=vec4(a_position,0.,1.);}`;
    const fragment = `precision mediump float;uniform vec2 u_resolution;uniform vec2 u_mouse;uniform float u_time;uniform float u_scroll;uniform float u_light;
    void main(){vec2 uv=gl_FragCoord.xy/u_resolution;vec2 p=(uv-vec2(.74,.48))*vec2(u_resolution.x/u_resolution.y,1.);float d=length(p);float a=atan(p.y,p.x);float wave=sin(d*30.-u_time*.6+sin(a*4.+u_time*.15)*.6+u_scroll*2.+u_mouse.x*.7);float rings=pow(max(0.,wave),22.);float spokes=pow(max(0.,sin(a*24.+u_time*.06+u_mouse.y*.5)),38.);float falloff=(1.-smoothstep(.18,.85,d))*smoothstep(.04,.25,d);float intensity=(rings*.25+spokes*.1)*falloff;vec3 color=mix(vec3(.48,.57,1.),vec3(.22,.32,.88),u_light);gl_FragColor=vec4(color,intensity*.75);}`;
    function shader(type, source) { const s = gl.createShader(type); gl.shaderSource(s, source); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { gl.deleteShader(s); return null; } return s; }
    const vs = shader(gl.VERTEX_SHADER, vertex), fs = shader(gl.FRAGMENT_SHADER, fragment);
    if (!vs || !fs) return;
    const program = gl.createProgram(); gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);
    const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'a_position'); gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const uniforms = Object.fromEntries(['resolution', 'mouse', 'time', 'scroll', 'light'].map(key => [key, gl.getUniformLocation(program, 'u_' + key)]));
    let visible = true, frame, last = 0, mx = 0, my = 0;
    function resize() { const dpr = Math.min(devicePixelRatio, innerWidth < 651 ? 1 : 1.5); canvas.width = canvas.clientWidth * dpr; canvas.height = canvas.clientHeight * dpr; gl.viewport(0, 0, canvas.width, canvas.height); }
    new ResizeObserver(resize).observe(canvas);
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }); observer.observe(canvas);
    $('.hero').addEventListener('pointermove', e => { mx = e.clientX / innerWidth; my = e.clientY / innerHeight; }, { passive: true });
    function render(time) {
      frame = requestAnimationFrame(render);
      if (!visible || document.hidden || motion.matches || time - last < (innerWidth < 651 ? 32 : 15)) return;
      last = time;
      gl.uniform2f(uniforms.resolution, canvas.width, canvas.height); gl.uniform2f(uniforms.mouse, mx, my);
      gl.uniform1f(uniforms.time, time * .001); gl.uniform1f(uniforms.scroll, scrollY / innerHeight); gl.uniform1f(uniforms.light, document.documentElement.dataset.theme === 'light' ? 1 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
    canvas.addEventListener('webglcontextlost', e => { e.preventDefault(); cancelAnimationFrame(frame); });
    resize(); frame = requestAnimationFrame(render);
  }
  initAnimations();
  initWebGL();
})();
