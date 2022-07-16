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
const aboutTabs = new GraphTabs('about-tabs');
aboutTabs.switchTabs(aboutTabs.tabs.querySelector('#about-tabs2'));

const reviewsTabs = new GraphTabs('reviews-tabs');
reviewsTabs.switchTabs(reviewsTabs.tabs.querySelector('#reviews-tabs2'));


// ========================================================================================


// Получение высоты шапки сайта (не забудьте вызвать функцию)
import {
    getHeaderHeight
} from './functions/header-height';
getHeaderHeight();
window.addEventListener('resize', getHeaderHeight);

// ========================================================================================



import SimpleBar from 'simplebar';
document.querySelectorAll('.block-scroll').forEach(el => {
    const simpleBar = new SimpleBar(el);
    const vertical = simpleBar.el.querySelector('.simplebar-vertical');

    let interval;

    function forceUpdateTimer(mask) {
        clearInterval(interval);
        let timerSeconds = 0;
        interval = setInterval(() => {
            if (timerSeconds >= 0) {
                timerSeconds++;
            }
            if (timerSeconds == 10) {
                clearInterval(interval);
                mask.classList.add('mask');
            }
        }, 1000);
    }


    setTimeout(() => {
        if (getComputedStyle(vertical).visibility == 'visible') {
            simpleBar.maskEl.classList.add('mask');
        }
        simpleBar.getScrollElement().addEventListener('scroll', (e) => {
            const mask = e.target.closest('.simplebar-mask');
            if (mask.classList.contains('mask')) {
                mask.classList.remove('mask');
            }
            if (!mask.classList.contains('mask')) {
                forceUpdateTimer(mask);
            };
        });
    }, 1000);
});



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

    validateForms('.reception-form__inner--1', receptionFormRules, afterForm);
    validateForms('.reception-form__inner--2', receptionFormRules, afterForm);
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
    document.querySelectorAll('.reception-form__select').forEach(el => {
        new Choices(el, {
            searchEnabled: false,
            maxItemCount: 3,
            itemSelectText: 'Выбрать',
            shouldSort: false,
            position: 'bottom',
        });
    });
}
receptionFormSelect();




// ========================================================================================
