const selectionBtn = document.querySelector('.select-menu__button');
const selectNavEl = document.querySelector('.select-menu__template');

const visibleSelectEl = document.querySelector('.select-menu__link');
const selectNavSubMenu = document.querySelector('.sub-select-menu__list');
const subMenuElements = document.querySelectorAll('.sub-select-menu__template');

// /. variables

const toggleVisibleClass = () => {
    selectionBtn.classList.toggle('active');
    selectNavSubMenu.classList.toggle('active');
};

selectNavEl.addEventListener('click', toggleVisibleClass);

selectionBtn.addEventListener('click', e => {
    e.stopPropagation();
    toggleVisibleClass();
});

subMenuElements.forEach(el => {
    el.addEventListener('click', () => {
        subMenuElements.forEach(item => {
            item.classList.remove('active');
        });

        el.classList.add('active');
        // /. handle visible class

        visibleSelectEl.textContent = el.textContent;
    });
});

document.addEventListener('keydown', e => {
    const isValidCondition =
        selectNavSubMenu.classList.contains('active') && e.code === 'Escape';
    isValidCondition && toggleVisibleClass();
});

document.addEventListener('click', e => {
    const isValidCondition =
        selectNavSubMenu.classList.contains('active') &&
        !selectNavSubMenu.contains(e.target) &&
        !visibleSelectEl.contains(e.target);

    isValidCondition && toggleVisibleClass();
});
