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
