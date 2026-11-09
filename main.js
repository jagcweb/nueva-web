// Entrada de la portada (una sola vez)
document.documentElement.classList.add('js');
window.addEventListener('load', () => requestAnimationFrame(() => document.documentElement.classList.add('loaded')));

// Cabecera con fondo al bajar
(() => {
  const top = document.querySelector('.top');
  const pintar = () => top.classList.toggle('scrolled', scrollY > 24);
  addEventListener('scroll', pintar, { passive: true });
  pintar();
})();

// Modo claro / oscuro (oscuro por defecto)
(() => {
  const btn = document.getElementById('tema');
  const meta = document.querySelector('meta[name="theme-color"]');
  const pintar = () => {
    const oscuro = document.documentElement.dataset.theme !== 'claro';
    btn.setAttribute('aria-label', oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    meta.content = oscuro ? '#0d1524' : '#eef1f6';
  };
  btn.addEventListener('click', () => {
    const nuevo = document.documentElement.dataset.theme === 'claro' ? 'oscuro' : 'claro';
    document.documentElement.dataset.theme = nuevo;
    try { localStorage.setItem('tema', nuevo); } catch (e) {}
    pintar();
  });
  pintar();
})();

// Formulario: prepara un correo con los datos (la web es estática)
(() => {
  const form = document.getElementById('form-contacto');
  const error = document.getElementById('form-error');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    const nombre = (d.get('nombre') || '').trim();
    const mensaje = (d.get('mensaje') || '').trim();
    if (!nombre || !mensaje) {
      error.textContent = !nombre ? 'Escribe tu nombre para poder contestarte.' : 'Cuéntame en una frase qué necesitas.';
      error.hidden = false;
      form.querySelector(!nombre ? '#f-nombre' : '#f-mensaje').focus();
      return;
    }
    error.hidden = true;
    const empresa = (d.get('empresa') || '').trim();
    const asunto = `Proyecto${empresa ? ' de ' + empresa : ''}: ${d.get('modo')}`;
    const cuerpo = `${mensaje}\n\n${nombre}${empresa ? '\n' + empresa : ''}\nForma de trabajo: ${d.get('modo')}`;
    location.href = `mailto:hola@jagcweb.es?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  });
})();
