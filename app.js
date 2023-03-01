const nav = document.querySelector('nav');
const navOffsetTop = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= navOffsetTop) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    nav.classList.add('fixed');
  } else {
    document.body.style.paddingTop = 0;
    nav.classList.remove('fixed');
  }
}

window.addEventListener('scroll', fixNav);