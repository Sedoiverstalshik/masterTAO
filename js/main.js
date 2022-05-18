const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoHeight: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// burger__menu
const burgerMenu = document.querySelector('.burger__menu')
const menu = document.querySelector('.header__menu-list')
console.log(menu);

burgerMenu.addEventListener('click', function () {
  this.classList.toggle('burger__menu--active'),
    menu.classList.toggle('active')
});