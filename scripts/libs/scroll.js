const scrollTop = document.querySelector('.page-top-text');
const clickEventType = (( window.ontouchstart!==null ) ? 'click':'touchend');
scrollTop.addEventListener(clickEventType, () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});