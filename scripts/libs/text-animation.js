const FadeUps = document.querySelectorAll('.text-animation');

FadeUps.forEach((FadeUp) => {
  gsap.to(FadeUp, {
    scrollTrigger: {
      trigger: FadeUp,
      start: 'top 75%',   
    }
  });
  ScrollTrigger.create({
    trigger: FadeUp,
    start: 'top 75%',  
    once: true,
    toggleClass: {
      targets: FadeUp,
      className: 'fade-up',
    }
  })
})
