// =========================================================================================



import Swiper, {
    Navigation,
    Pagination,
    EffectFade,
    Thumbs,
} from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade, Thumbs]);



// =========================================================================================




function initSliders() {




    if (document.querySelector('.hero__slider')) {
        const heroSliders = document.querySelectorAll('.hero__slider').forEach(el => {
            new Swiper(el, {

                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                // autoplay: {
                // 	delay: 3000,
                // 	disableOnInteraction: false,
                // },

                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 30,
                speed: 800,
                // touchRatio: 0,
                // simulateTouch: false,
                // loop: true,
                // preloadImages: false,
                // lazy: true,


                pagination: {
                    el: el.closest('.hero').querySelector('.hero__pagination'),
                    clickable: true,
                },

                navigation: {
                    nextEl: el.closest('.hero').querySelector('.hero-nav-next'),
                    prevEl: el.closest('.hero').querySelector('.hero-nav-prev'),
                },

                /*
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        autoHeight: true,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1268: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
                */

                on: {

                }
            });
        });
    }
    if (document.querySelector('.service-bottom__slider')) {
        const heroSliders = document.querySelectorAll('.service-bottom__slider').forEach(el => {
            new Swiper(el, {
                // autoplay: {
                // 	delay: 3000,
                // 	disableOnInteraction: false,
                // },

                observer: true,
                observeParents: true,
                slidesPerView: 1.15,
                spaceBetween: 10,
                speed: 800,
                // touchRatio: 0,
                // simulateTouch: false,
                // loop: true,
                // preloadImages: false,
                // lazy: true,


                // pagination: {
                //     el: el.closest('.hero').querySelector('.hero__pagination'),
                // 	clickable: true,
                // },

                // navigation: {
                //     nextEl: el.closest('.hero').querySelector('.hero-nav-next'),
                //     prevEl: el.closest('.hero').querySelector('.hero-nav-prev'),
                // },


                breakpoints: {
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                },


                on: {

                }
            });
        });
    }

    function ourDoctorsSlider(ourDoctorsInner) {
        const nav = ourDoctorsInner.querySelector('.our-doctors-nav__slider');
        const body = ourDoctorsInner.querySelector('.our-doctors-body__slider');
        let navSlider = new Swiper(nav, {
            slidesPerView: 3,
            spaceBetween: 20,
            observer: true,
            observeParents: true,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            direction: 'horizontal',
            breakpoints: {
                901: {
                    direction: 'vertical',
                    spaceBetween: 15,
                }
            },
        });
        let bodySlider = new Swiper(body, {
            spaceBetween: 10,
            observer: true,
            observeParents: true,
            navigation: {
                prevEl: ourDoctorsInner.querySelector('.our-doctors__navigation--prev'),
                nextEl: ourDoctorsInner.querySelector('.our-doctors__navigation--next'),
            },
            pagination: {
                el:  ourDoctorsInner.querySelector('.our-doctors__pagination'),
                type: 'fraction',
            },
            thumbs: {
                swiper: navSlider,
            },
        })
    }
    if (document.querySelector('.our-doctors__inner')) {
        document.querySelectorAll('.our-doctors__inner').forEach(el => {
            ourDoctorsSlider(el);
        });
    }







}







// =========================================================================================





window.addEventListener("load", function (e) {
    initSliders();
});





// =========================================================================================
