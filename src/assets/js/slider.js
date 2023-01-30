import Swiper, { Navigation, Pagination } from 'swiper';

import '../libs/swiper.scss';

// /. imports

const offerSlider = new Swiper('.offer__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    modules: [Navigation, Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

const categoriesSlider = new Swiper('.categories__slider', {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1.5,
            centeredSlides: true
        },
        385: {
            slidesPerView: 1.9,
            centeredSlides: true
        },
        560: {
            slidesPerView: 2.5,
            centeredSlides: true
        },
        768: {
            slidesPerView: 3.2,
            centeredSlides: false
        },
        840: {
            slidesPerView: 4,
            centeredSlides: false
        },
        992: {
            slidesPerView: 4.5,
            centeredSlides: false
        },
        1200: {
            slidesPerView: 5,
            centeredSlides: false
        },
        1300: {
            slidesPerView: 6,
            centeredSlides: false
        }
    }
});

const saleSlider = new Swiper('.sale-slider', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next.roundish',
        prevEl: '.swiper-button-prev.roundish'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            centeredSlides: true
        },
        425: {
            slidesPerView: 1,
            centeredSlides: true
        },
        560: {
            slidesPerView: 1.35,
            centeredSlides: true
        },
        600: {
            slidesPerView: 1.7,
            centeredSlides: true
        },
        768: {
            slidesPerView: 2.1,
            centeredSlides: false
        },
        992: {
            slidesPerView: 3.1,
            centeredSlides: false
        },
        1300: {
            slidesPerView: 4,
            centeredSlides: false
        }
    }
});

const saleNestedSlider = new Swiper('.sale-slider_nested', {
    slidesPerView: 1,
    modules: [Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

// /. slider configuration
