const hero = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const delivery = new Swiper('.delivery__swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
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
const modalButtons = document.querySelectorAll('[data-modal-button]')
const modalCloseButton = document.querySelectorAll('[data-modal-close]')
const allModals = document.querySelectorAll('[data-modal]')

modalButtons.forEach(function (item) {
  item.addEventListener('click', function () {
    const modalId = this.dataset.modalButton
    const modal = document.querySelector('#' + modalId);
    modal.classList.remove('none');

    modal.querySelector('.modal__windows').addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });
});

modalCloseButton.forEach(function (item) {
  item.addEventListener('click', function () {
    const modal = this.closest('[data-modal]');
    modal.classList.add('none');
  });
});

allModals.forEach(function (item) {
  item.addEventListener('click', function () {
    this.classList.add('none');
  });
});

// calculator__form
const buttonFormNext1 = document.querySelector('#button__form-next1')
const buttonFormNext2 = document.querySelector('#button__form-next2')
const buttonFormPrev = document.querySelector('#button__form-prev')
const form1 = document.querySelector('#form1')
const form2 = document.querySelector('#form2')
const form3 = document.querySelector('#form3')

buttonFormNext1.addEventListener('click', () => {
  form1.style.display = "none"
  form2.style.display = "block"
});
buttonFormNext2.addEventListener('click', () => {
  form2.style.display = "none"
  form3.style.display = "block"
});
buttonFormPrev.addEventListener('click', () => {
  form2.style.display = "none"
  form1.style.display = "block"
});
