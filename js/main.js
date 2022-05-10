const hero = new Swiper('.hero__swiper', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



const delivery = new Swiper('.delivery__swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.delivery__swiper-next, .swiper-button-next',
    prevEl: '.delivery__swiper-prev, .swiper-button-prev',
  },
});
const services = new Swiper('.services__swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.services__swiper-next, .swiper-button-next',
    prevEl: '.services__swiper-prev, .swiper-button-prev',
  },
});