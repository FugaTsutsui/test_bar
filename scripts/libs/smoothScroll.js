const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++){
  const clickEventType = (( window.ontouchstart!==null ) ? 'click':'touchend');
  smoothScrollTrigger[i].addEventListener(clickEventType, (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href');
    let targetElement = document.getElementById(href.replace('#', ''));
    const rect = targetElement.getBoundingClientRect().top;
    const target = rect + window.pageYOffset - 55;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });
}

