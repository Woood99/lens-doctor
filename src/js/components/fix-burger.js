function distanceScroll() {
    const distance = window.pageYOffset;
    const headerHeight = document.querySelector('.header').offsetHeight;
    if (!document.querySelector('.header-bottom__nav').classList.contains('menu--active') && distance <= (headerHeight * 1.15)) {
        document.querySelector(':root').style.setProperty('--distance', `${distance}px`);
    }
};
distanceScroll();
window.addEventListener('scroll', distanceScroll);
