if (document.querySelector('[data-dropdown]')) {
    const dropdownList = document.querySelectorAll('[data-dropdown]');
    dropdownList.forEach(el => {
        const button = el.querySelector('[data-dropdown-button]');
        const box = el.querySelector('[data-dropdown-box]');
        const back = box.querySelector('[data-dropdown-back]');
        button.addEventListener('click',(e) => {
            if (!e.target.classList.contains('active')) {
                box.classList.add('active');
            }
        })
        back.addEventListener('click',(e) => {
            if (box.classList.contains('active')) {
                box.classList.remove('active');
            }
        })
    });
}
