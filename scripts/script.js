

const headerCityButton = document.querySelector('.header__city-button');

if (localStorage.getItem('lomoda-location')) {
  headerCityButton.textContent = localStorage.getItem('lomoda-location');
}

headerCityButton.textContent = localStorage.getItem('lomoda-location') ||
  'Ваш город'

headerCityButton.addEventListener('click', () => {

  const city = prompt('укажите ваш город')
  headerCityButton.textContent = city;

  localStorage.setItem('lomoda-location', city)
})

//  мод окно  ============


const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

const cartModalOpen = () => {
  cartOverlay.classList.add('cart-overlay-open');
  disableScroll();
}

const cartModalClose = () => {
  cartOverlay.classList.remove('cart-overlay-open');
  enableScroll();
}

subheaderCart.addEventListener('click', cartModalOpen);

cartOverlay.addEventListener('click', (e) => {
  const target = e.target;

  target.classList.contains("cart__btn-close") ? cartModalClose() : null
  target.matches(".cart-overlay-open") ? cartModalClose() : null
});

//  блокировка скролла ===================

const disableScroll = () => {

  const widthScroll = window.innerWidth - document.body.offsetWidth;

  document.body.dbScrollY = window.scrollY;

  document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left:0;
    width:100%;
    height: 100vh;
    overflow: hidden;
    padding-right: ${widthScroll}px;
  `;
};

const enableScroll = () => {
  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dbScrollY,
  })
};

// ===========================================================