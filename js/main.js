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
  pagination: {
    el: '.delivery__swiper-pagination, .swiper-pagination',
  },

  breakpoints: {
    800: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    300: {
      slidesPerView: 1,
    },
  }
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
  pagination: {
    el: '.delivery__swiper-pagination, .swiper-pagination',
  },

  breakpoints: {
    800: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    300: {
      slidesPerView: 1,
    },
  }
});

// modal
const modal = document.querySelectorAll('.modal__form')
// const modalVolume = document.querySelector('.form__volume')
const modalBtn = document.querySelectorAll('.btn__accent')
const modalBtnCalc = document.querySelector('.btn__calculate')
const close = document.querySelectorAll('.form__close')

// modal.forEach(function (e) {
//   e.addEventListener('click', function () {
//     modal.style.display = 'block';
//   })
// });

// modalBtn.forEach(function (i) {
//   i.addEventListener('click', function () {
//     modal.classList.togle('open')
//   })
// });




// modalBtnCalc.addEventListener('click', () => {
//   modalVolume.style.display = 'grid';
// });


// close.forEach(function (e) {
//   e.addEventListener('click', function () {
//     modal.style.display = 'none';
//   })
// });