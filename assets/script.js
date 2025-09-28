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
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const item = this.parentElement;
    // Cierra otros dropdowns si quieres solo uno abierto
    document.querySelectorAll('.dropdown__item').forEach(i => {
      if(i !== item) i.classList.remove('open');
    });
    item.classList.toggle('open');
  });
});

// Cierra el dropdown al hacer clic fuera
document.addEventListener('click', function(e) {
  document.querySelectorAll('.dropdown__item.open').forEach(item => {
    // Si el click NO fue dentro del dropdown__item, ciérralo
    if (!item.contains(e.target)) {
      item.classList.remove('open');
    }
  });
});
