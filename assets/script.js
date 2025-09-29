const btn = document.querySelector('.nav-toggle');
const links = document.querySelector('#nav-links');
if(btn){
  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
}

/*  SCRIPT PARA MOSTRAR MENU */
const mostrarMenu = (toggledId, navId) => {
  const toggle = document.getElementById(toggledId),
    nav = document.getElementById(navId)

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show-menu');
    toggle.classList.toggle('show-icon');
  });
}
mostrarMenu('nav-toggle', 'nav-menu');

/*  SCRIPT PARA EL DROPWDOWN */
document.querySelectorAll('.dropdown__item .nav__link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const item = link.parentElement;
    document.querySelectorAll('.dropdown__item').forEach(i => {
      if(i !== item) i.classList.remove('open');
    });
    item.classList.toggle('open');
  });
});

// Cierra dropdown al hacer clic fuera o al seleccionar una opción
document.addEventListener('click', e => {
  document.querySelectorAll('.dropdown__item.open').forEach(item => {
    if (!item.contains(e.target) || e.target.classList.contains('dropdown__link')) {
      item.classList.remove('open');
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const targetId = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const navbar = document.querySelector('.site-header');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});
