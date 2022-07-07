function distanceScroll() {
    if (!document.querySelector('.header-bottom__nav').classList.contains('menu--active')) {
        let distance = pageYOffset;
        document.querySelector(':root').style.setProperty('--distance', `${distance}px`);
    }
};
distanceScroll();
window.addEventListener('scroll', distanceScroll);
