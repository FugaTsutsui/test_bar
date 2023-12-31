document.addEventListener('DOMContentLoaded', function() {
  const hero = new HeroSlider();
})

class HeroSlider {
  constructor() {
    this.swiper = new Swiper('.swiper', {
      grabCursor: false, //grab時のカーソル
      loop: true,
      effect: 'fade',
      centeredSliders: true, //slidersを中央にする
      slidesPerView: 1, //画面内での画像の表示枚数
      speed: 1500,
      SimulateTouch: false,
      allowTouchMove: false,
      // breakpoints: {
        //   1024: {
          //     slidesPerView: 1,
          //   }
          // },
      autoplay: {
        delay: 6500,
        disableOnInteraction: false, //grabされてもオートでスライドさせるため
      },
      on: {
        slideChangeTransitionStart: function () {
          const timer = document.querySelector('.swiper-timer__running');
          timer.className = "";
          window.requestAnimationFrame(function(time) {
            window.requestAnimationFrame(function(time) {
              timer.className = "swiper-timer__running";
            });
          });
        },
      }
    });
   }
}