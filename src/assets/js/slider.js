import Swiper, { Navigation, Pagination } from 'swiper';

import '../libs/swiper.scss';

// /. imports

const offerSlider = new Swiper('.offer__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
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
    loop: true
});

// /. slider configuration
