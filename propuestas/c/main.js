'use strict';
const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
function updateThemeButton() {
  const light = root.dataset.theme === 'light';
  themeButton.setAttribute('aria-label', light ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
  themeButton.setAttribute('aria-pressed', String(light));
  document.querySelector('meta[name="theme-color"]').content = light ? '#f7f8fa' : '#171b24';
}
updateThemeButton();
themeButton.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  try { localStorage.setItem('jagc-theme', root.dataset.theme); } catch (error) { /* También funciona sin almacenamiento. */ }
  updateThemeButton();
});
const navigation = [...document.querySelectorAll('.header nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}
const form = document.querySelector('#contact-form');
const fields = [document.querySelector('#name'), document.querySelector('#message')];
function validate(field) {
  const valid = field.value.trim().length > 0;
  field.setAttribute('aria-invalid', String(!valid));
  document.querySelector('#' + field.id + '-error').textContent = valid ? '' : field.id === 'name' ? 'Escribe tu nombre para que sepa cómo llamarte.' : 'Cuéntame brevemente qué necesitas.';
  return valid;
}
fields.forEach(field => field.addEventListener('input', () => {
  if (field.getAttribute('aria-invalid') === 'true') validate(field);
}));
form.addEventListener('submit', event => {
  event.preventDefault();
  const valid = fields.map(validate);
  const status = document.querySelector('#form-status');
  status.textContent = '';
  if (valid.includes(false)) { fields[valid.indexOf(false)].focus(); return; }
  const data = new FormData(form);
  const body = `Nombre: ${data.get('name').trim()}\nEmpresa: ${data.get('company').trim() || 'No indicada'}\nForma de trabajar: ${data.get('work')}\n\n${data.get('message').trim()}`;
  window.location.href = 'mailto:hola@jagcweb.es?subject=' + encodeURIComponent('Nuevo proyecto · ' + data.get('name').trim()) + '&body=' + encodeURIComponent(body);
  status.textContent = 'Tu mensaje está preparado. Si no se abre tu correo, escribe directamente a hola@jagcweb.es.';
});
