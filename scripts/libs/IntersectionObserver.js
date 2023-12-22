const pageTop = document.querySelector('.page-top');
const pageDown = document.querySelector('.page-down');
const inView = document.querySelector('.swiper');
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      pageDown.classList.add('inview');
      pageTop.classList.remove('inview');
    } else {
      pageTop.classList.add('inview');
      pageDown.classList.remove('inview');
    }
  });
}
const options = {
  root: null,
  rootMargin: "-500px 0px 0px 0px",
};

const io = new IntersectionObserver(cb, options);
io.observe(inView);