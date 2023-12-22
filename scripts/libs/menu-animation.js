const FadeUp = document.querySelector('.text-animation');

window.addEventListener('DOMContentLoaded', (e) =>{
    FadeUp.classList.add( "fade-up" );
});



class MobileMenu {
    constructor() {
      this.DOM = {}; 
      this.DOM.btn = document.querySelector('.mobile-menu-btn');
      this.DOM.cover = document.querySelector('.mobile-nav__list');
      this.DOM.container = document.querySelector('#global-container');
      this.DOM.anchors = document.querySelectorAll('a[href^="#"]');
      this.eventType = this._getEventType();
      this.smartTouch = this._smart();
      this._addEvent();
      this._removeEvent();
    }
  
    _getEventType() {
      const isTouchCapable =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch) ||
        navigator.maxTouchPoints > 0 ||
        window.navigator.msMaxTouchPoints > 0;
  
      return isTouchCapable ? "touchstart" : "click";
    }
  
    _toggle() {
      this.DOM.container.classList.toggle("menu-open");
    }

    _smart() {
      const clickEventType = (( window.ontouchstart!==null ) ? 'click':'touchend');
    }
   
    _addEvent() {
      this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
      this.DOM.cover.addEventListener(this.smartTouch, this._toggle.bind(this));
    }
    
    _removeEvent() {
      for (let i = 0; i < this.DOM.anchors.length; i++) {
        this.DOM.anchors[i].removeEventListener(this.smartTouch, this._addEvent, false);
      }
    }
}
  
new MobileMenu();