import { isMobile, isTablet, isDesktop } from '../functions/check-viewport';


if (document.querySelector('.search')) {

    const search = document.querySelector('.search');
    const searchBtn = document.querySelector('.search__btn');
    const searchForm = document.querySelector('.search-form');
    const searchFormBtn = document.querySelector('.search-form__btn');
    const searchFormInput = document.querySelector('.search-form__input');
    if (!isMobile()){
        searchBtn.addEventListener('click', (e) => {
            e.target.closest('.search').classList.add('search--active');
        });
        searchFormBtn.addEventListener('click', (e) => {
            if (search.classList.contains('search--active') && searchFormInput.value == '') {
                e.preventDefault();
                search.classList.remove('search--active');
            }
        });
    }
    if (isMobile()){
        searchBtn.addEventListener('click', (e) => {
            e.target.closest('.search').classList.toggle('search--active');
            document.querySelector('[data-burger]').classList.remove('burger--active');
            document.querySelector('[data-menu]').classList.remove('menu--active');
        })
        document.addEventListener('click', (e) => {
            if (search.classList.contains('search--active') && e.target != searchForm && e.target != searchBtn && e.target != searchFormBtn && e.target != searchFormInput) {
               search.classList.remove('search--active');
            }
        })
    }
}
