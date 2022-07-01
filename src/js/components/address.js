if (document.querySelector('.header-address')) {
    const address = document.querySelector('.header-address');
    const addressBtn = document.querySelector('.header-address__btn');
    const addressList = document.querySelector('.header-address__list');
    addressBtn.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('header-address__btn--active');
        addressList.classList.toggle('header-address__list--active');
        document.querySelector('[data-burger]').classList.remove('burger--active');
        document.querySelector('[data-menu]').classList.remove('menu--active');
    });
    document.addEventListener('click', (e) => {
        if (addressList.classList.contains('header-address__list--active') && e.target != addressBtn && e.target.closest('.header-address__list') != addressList) {
            addressBtn.classList.remove('header-address__btn--active');
            addressList.classList.remove('header-address__list--active');
        }
    })
}
