"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var headerSearchOpen = document.querySelector('#search-open');
  var headerSearchWrapper = document.querySelector('#header-search-wrapper');
  headerSearchOpen.addEventListener('click', function () {
    headerSearchWrapper.classList.toggle('none');
  });
});
var menuToggle = document.querySelector('#menu-toggle');
var bodyEl = document.body;
var headerMenu = document.querySelector('#head-menu');

if (menuToggle) {
  menuToggle.addEventListener('click', function () {
    if (menuToggle.classList.contains('active')) {
      menuToggle.classList.remove('active');
      headerMenu.classList.remove('active');
      bodyEl.classList.remove('lock');
    } else {
      menuToggle.classList.add('active');
      headerMenu.classList.add('active');
      bodyEl.classList.add('lock');
    }
  });
} // Слайдер


var headerSwiper = new Swiper('.header-slider', {
  loop: true,
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1]
    },
    next: {
      translate: ["100%", 0, 0]
    }
  },
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var ctaSwiper = new Swiper('.cta-slider', {
  loop: true,
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ['-20%', 0, -1]
    },
    next: {
      translate: ['100%', 0, 0]
    }
  },
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});