// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
const toggleLabel = toggle.querySelector('.sr-only');

function setMenu(open) {
  menu.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggleLabel.textContent = open ? 'Fechar menu' : 'Abrir menu';
}

toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.addEventListener('click', (e) => { if (e.target.matches('a')) setMenu(false); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); toggle.focus(); }
});

// Destaca a seção atual no menu
const links = [...menu.querySelectorAll('a')];
const sections = links.map((a) => document.querySelector(a.getAttribute('href')));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((a) => a.removeAttribute('aria-current'));
        const active = links[sections.indexOf(entry.target)];
        if (active) active.setAttribute('aria-current', 'true');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => s && observer.observe(s));
}

// Ano no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();
