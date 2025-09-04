
const btn = document.querySelector('.nav-toggle');
const links = document.querySelector('#nav-links');
if(btn){
  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
}
