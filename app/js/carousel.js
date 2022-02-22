export function carousel() {
  const carouselBase = document.querySelector('.home-blog-wrapper');
  const carouselWrapper = document.querySelector('.home-blog-carousel');
  const carouselItems = document.querySelectorAll('.blog-card');
  const userEvents = {
    down: navigator.maxTouchPoints > 0 ? 'touchstart' : 'pointerdown',
    up: navigator.maxTouchPoints > 0 ? 'touchend' : 'pointerup',
    move: navigator.maxTouchPoints > 0 ? 'touchmove' : 'pointermove',
  }
  const userInteractions = {
    clicked: false,
    actualPosition: 0,
    enterX: 0,
    leaveX: 0,
    clickingTime: 0
  }

  if (!carouselWrapper) return;

  readjustCarouselSize(carouselBase, carouselWrapper, carouselItems);

  window.addEventListener('resize', () => {
    readjustCarouselSize(carouselBase, carouselWrapper, carouselItems);
  });

  // Items Events
  carouselItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
    });

    item.addEventListener(userEvents.down, e => {
      e.preventDefault();

      item.style.setProperty('cursor', 'grab');
      userInteractions.clickingTime = Date.now();
    });

    item.addEventListener(userEvents.up, () => {
      item.style.setProperty('cursor', 'pointer');

      if (Date.now() - userInteractions.clickingTime < 100)
        window.location.href = item.getAttribute('href');
    });
  });

  // CarouselEvents
  carouselWrapper.addEventListener(userEvents.down, e => {
    const clientX = e.pointerType === 'mouse' ? e.clientX : e.changedTouches[0].clientX;

    carouselWrapper.style.setProperty('cursor', 'grab');

    userInteractions.enterX = clientX - userInteractions.actualPosition;
    userInteractions.clicked = true;
  });

  carouselWrapper.addEventListener(userEvents.move, e => {
    if (userInteractions.clicked) {
    const clientX = e.pointerType === 'mouse' ? e.clientX : e.changedTouches[0].clientX;
    const xMovement = -(userInteractions.enterX - clientX);

      userInteractions.actualPosition = xMovement;
      carouselWrapper.style.setProperty('transform', `translate3d(${xMovement}px, 0, 0)`)
    }
  });

  carouselWrapper.addEventListener(userEvents.up, e => {
    const clientX = e.pointerType === 'mouse' ? e.clientX : e.changedTouches[0].clientX;

    carouselWrapper.style.setProperty('cursor', 'default');

    userInteractions.enterX = 0;
    userInteractions.leaveX = clientX;
    userInteractions.clicked = false;
  });
}

function readjustCarouselSize(carouselBase, carouselWrapper, carouselItems) {
  const itemWidthSize = window.innerWidth * 0.9 < 320 ? window.innerWidth * 0.9 : 320; 
  const newCarouselWrapperWidth = (itemWidthSize * carouselItems.length) + (32 * (carouselItems.length - 1));

  carouselWrapper.style.setProperty('width', `${newCarouselWrapperWidth}px`);

  const itemHeightSize = carouselItems[0].getBoundingClientRect().height;

  carouselBase.style.setProperty('height', `${itemHeightSize}px`);
}
