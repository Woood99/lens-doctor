if (document.querySelector('.header-address')) {
    const address = document.querySelector('.header-address');
    const addressBtn = document.querySelector('.header-address__btn');
    const addressList = document.querySelector('.header-address__list');
    addressBtn.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('header-address__btn--active');
        addressList.classList.toggle('header-address__list--active');
    })
}
