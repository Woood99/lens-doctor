// ========================================================================================


// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())


// ========================================================================================


// Определение ширины экрана
import {
    isMobile,
    isTablet,
    isDesktop
} from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('desktop')
// } else if (isTablet()) {
//     console.log('tablet')
// } else if (isMobile()) {
//     console.log('isMobile')
// }


// ========================================================================================


// Реализация бургер-меню
import {
    burger
} from './functions/burger';


// ========================================================================================


// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';


// ========================================================================================


// Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal();


// ========================================================================================


// Реализация табов
import GraphTabs from 'graph-tabs';
const tabs = new GraphTabs('about-tabs');
tabs.switchTabs(tabs.tabs.querySelector('#about-tabs2'));


// ========================================================================================


// Получение высоты шапки сайта (не забудьте вызвать функцию)
import {
    getHeaderHeight
} from './functions/header-height';
getHeaderHeight();
window.addEventListener('resize', getHeaderHeight);

// ========================================================================================



// import SimpleBar from 'simplebar';

// ========================================================================================


// Подключение файла со слайдерами
import "./functions/sliders";


// ========================================================================================



// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();


// ========================================================================================



// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');


// ========================================================================================


// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');


// ========================================================================================


// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//     console.log(e.target);
//     console.log(e.detail);
//     console.log(e.detail.dir);
// });



// ========================================================================================


import {
    validateForms
} from './functions/validate-forms';

if (document.querySelector('.reception-form__inner')) {
    const receptionFormRules = [{
            ruleSelector: '.reception-form__input--name',
            rules: [{
                    rule: 'minLength',
                    value: 3,
                    errorMessage: 'Имя должно состоять минимум из 3 букв'
                },
                {
                    rule: 'required',
                    value: true,
                    errorMessage: 'Заполните имя!'
                }
            ]
        },
        {
            ruleSelector: '.reception-form__input--tel',
            tel: true,
            telError: 'Введите корректный телефон',
            rules: [{
                rule: 'required',
                value: true,
                errorMessage: 'Заполните телефон!'
            }]
        },
        {
            ruleSelector: '.reception-form__input--calendar',
            rules: [{
                rule: 'required',
            }]
        },
        {
            ruleSelector: '.reception-form__select',
            rules: [{
                rule: 'required',
            }]
        },
    ];

    const afterForm = () => {
        console.log('Произошла отправка, тут можно писать любые действия');
    };

    validateForms('.reception-form__inner', receptionFormRules, afterForm);
}

if (document.querySelector('.back-call-form')) {
    const backCallForm = [{
            ruleSelector: '.back-call-form__input--name',
            rules: [{
                    rule: 'minLength',
                    value: 3,
                    errorMessage: 'Имя должно состоять минимум из 3 букв'
                },
                {
                    rule: 'required',
                    value: true,
                    errorMessage: 'Заполните имя!'
                }
            ]
        },
        {
            ruleSelector: '.back-call-form__input--tel',
            tel: true,
            telError: 'Введите корректный телефон',
            rules: [{
                rule: 'required',
                value: true,
                errorMessage: 'Заполните телефон!'
            }]
        },
    ];

    const afterForm = () => {
        console.log('Произошла отправка, тут можно писать любые действия');
    };

    validateForms('.back-call-form', backCallForm, afterForm);
}



// ========================================================================================



// Подключение spollers
import * as spollersFunc from "./functions/spollers";
spollersFunc.spollers();


// ========================================================================================


import "./functions/gallery";


// ========================================================================================



// Модуль звездного рейтинга 
import * as ratingFunc from "./functions/rating";
ratingFunc.formRating();



// ========================================================================================



// Модуь  "количество"
//import { formQuantity } from './functions/quantity';
//formQuantity();


// ========================================================================================


/* Динамический адаптив */
import "./functions/dynamic-adapt";


// ========================================================================================


// Фикс фулскрин-блоков
import './functions/fix-fullheight';


// ========================================================================================


import AirDatepicker from 'air-datepicker';
document.querySelectorAll('.form-primary__input--calendar').forEach(el => {
    new AirDatepicker(el, {
        autoClose: true,
        isMobile: true,
    });
});


// ========================================================================================


import Choices from 'choices.js';



function receptionFormSelect() {
    let receptionSelect = document.querySelector('.reception-form__select');
    new Choices(receptionSelect, {
        searchEnabled: false,
        maxItemCount: 3,
        itemSelectText: 'Выбрать',
        shouldSort: false,
        position: 'bottom',
    });
}
receptionFormSelect();




// ========================================================================================


