// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
hamburger.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Language dropdown
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', (e) => {
  langToggle.classList.toggle('open');
  e.stopPropagation();
});
document.querySelectorAll('.lang__option').forEach(opt => {
  opt.addEventListener('click', () => {
    langToggle.querySelector('.lang__current').childNodes[0].textContent = opt.textContent + ' ';
    document.querySelectorAll('.lang__option').forEach(o => o.classList.remove('lang__option--active'));
    opt.classList.add('lang__option--active');
    langToggle.classList.remove('open');
  });
});
document.addEventListener('click', () => langToggle.classList.remove('open'));

// TOC toggle
document.getElementById('tocToggle').addEventListener('click', () => {
  document.querySelector('.toc').classList.toggle('open');
});

// Promo bar + scroll-to-top
const promoBar = document.querySelector('.promo-bar');
const scrollBtn = document.querySelector('.promo-bar__scroll');
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', () => {
  promoBar.classList.toggle('visible', window.scrollY > 300);
});

// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
  });
});

// Modal
const modal = document.getElementById('registerModal');
const modalOverlay = document.getElementById('modalOverlay');
function openModal() { modal.classList.add('open'); modalOverlay.classList.add('open'); }
function closeModal() { modal.classList.remove('open'); modalOverlay.classList.remove('open'); }
document.querySelectorAll('.js-open-modal').forEach(btn => {
  btn.addEventListener('click', (e) => { e.preventDefault(); openModal(); });
});
document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
