if (document.querySelector('.search')) {
    const search = document.querySelector('.search');
    const searchBtn = document.querySelector('.search__btn');
    const searchForm = document.querySelector('.search-form');
    const searchFormBtn = document.querySelector('.search-form__btn');
    const searchFormInput = document.querySelector('.search-form__input');
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
