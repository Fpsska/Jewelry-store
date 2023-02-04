const headerAuthLinks = document.querySelectorAll('.header__account a');
const categoryLinks = document.querySelectorAll('.categories-nav__link');
const categoriesSliderLinks = document.querySelectorAll('.categories-slider a');
const offerSliderLinks = document.querySelectorAll([
    '.offer-slider__button',
    '.offer-slider__image'
]);
const tagLinks = document.querySelectorAll('.tags-list__link');
const discountLinks = document.querySelectorAll('.discount-card');
const articleCardLinks = document.querySelectorAll('.article-card__title a');
const acticleSectionLink = document.querySelector('.articles__link');
const logoLink = document.querySelector('.logo');
const headerSearchForm = document.querySelector('.header__search-form');

// /. variables

const links = [
    ...headerAuthLinks,
    ...categoryLinks,
    ...categoriesSliderLinks,
    ...offerSliderLinks,
    ...tagLinks,
    ...discountLinks,
    ...articleCardLinks,
    acticleSectionLink,
    logoLink
];

links.forEach(link => {
    link.addEventListener('click', e => e.preventDefault());
});

headerSearchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    this.reset();
});
