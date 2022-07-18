// =========================================================================================

import Swiper, {
    Navigation,
    Pagination,
    EffectFade,
    EffectCards,
    Thumbs,
    Autoplay,
} from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade, EffectCards, Thumbs, Autoplay]);



// =========================================================================================




function initSliders() {
    if (document.querySelector('.hero__slider')) {
        const heroSliders = document.querySelectorAll('.hero__slider').forEach(el => {
            new Swiper(el, {
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 30,
                speed: 800,
                pagination: {
                    el: el.closest('.hero').querySelector('.hero__pagination'),
                    clickable: true,
                },

                navigation: {
                    nextEl: el.closest('.hero').querySelector('.hero-nav-next'),
                    prevEl: el.closest('.hero').querySelector('.hero-nav-prev'),
                },
            });
        });
    }
    if (document.querySelector('.service-bottom__slider')) {
        const heroSliders = document.querySelectorAll('.service-bottom__slider').forEach(el => {
            new Swiper(el, {
                observer: true,
                observeParents: true,
                slidesPerView: 1.15,
                spaceBetween: 10,
                speed: 800,
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
                el: ourDoctorsInner.querySelector('.our-doctors__pagination'),
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

    if (document.querySelector('.about-photo__slider')) {
        const aboutPhotoSlider = document.querySelectorAll('.about-photo__slider').forEach(el => {
            new Swiper(el, {
                effect: "cards",
                grabCursor: true,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: el.closest('.about-photo__inner').querySelector('.about-photo-pagination'),
                    clickable: true,
                },

                navigation: {
                    nextEl: el.closest('.about-photo__inner').querySelector('.about-photo-nav--next'),
                    prevEl: el.closest('.about-photo__inner').querySelector('.about-photo-nav--prev'),
                },
                on: {
                    slideChange: function (el) {
                        const navPrev = el.navigation.prevEl;
                        const navNext = el.navigation.nextEl;
                        const currentIndex = el.realIndex;
                        const amountSlide = el.wrapperEl.querySelectorAll('.about-photo__slide').length;
                        if (currentIndex == 0) {
                            navPrev.style.display = 'none';
                            navNext.style.display = 'flex';
                        }
                        if (currentIndex > 0 && currentIndex < amountSlide - 1) {
                            navPrev.style.display = 'flex';
                            navNext.style.display = 'flex';
                        }
                        if (currentIndex == amountSlide - 1) {
                            navPrev.style.display = 'flex';
                            navNext.style.display = 'none';
                        }
                    },
                }
            });
        });
    }

    if (document.querySelector('.our-rating__wrapper')) {
        const heroSliders = document.querySelectorAll('.our-rating__wrapper').forEach(el => {
            new Swiper(el, {
                observer: true,
                observeParents: true,
                slidesPerView: 1.51,
                spaceBetween: 30,
                speed: 800,
                pagination: {
                    el: el.closest('.our-rating__inner').querySelector('.our-rating__pagination'),
                    clickable: true,
                },
                breakpoints: {
                    400: {
                        slidesPerView: 1.6,
                    },
                    576: {
                        slidesPerView: 2.4,
                    },
                    768: {
                        slidesPerView: 3.4,
                    },
                    1025: {
                        slidesPerView: 4,
                        spaceBetween: 83,
                    },
                },
            });
        });
    }
    if (document.querySelector('.reviews-slider')) {
        const reviewsSliders = document.querySelectorAll('.reviews-slider').forEach(el => {
            new Swiper(el, {
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 30,
                speed: 800,
                pagination: {
                    el: el.closest('.reviews-tab').querySelector('.reviews__pagination'),
                    clickable: true,
                },
                navigation: {
                    nextEl: el.closest('.reviews-tab').querySelector('.reviews__nav--next'),
                    prevEl: el.closest('.reviews-tab').querySelector('.reviews__nav--prev'),
                },
                breakpoints: {
                    1025: {
                        slidesPerView: 2,
                        spaceBetween: 43,
                    },
                },
                on: {
                    breakpoint: function (slider) {
                        if (slider.currentBreakpoint == '1025') {
                            if (el.classList.contains('reviews-slider--text')) {
                                el.querySelectorAll('.reviews-text-slide__text').forEach(block => {
                                    let scrollBar = block.querySelector('.simplebar-vertical');
                                    block.addEventListener('mousemove', (e) => {
                                        if (block.classList.contains('simplebar-dragging') || scrollBar.classList.contains('simplebar-hover')) {
                                            slider.allowTouchMove = false;
                                        } else {
                                            slider.allowTouchMove = true;
                                        }
                                    });
                                });
                            };
                        }
                    }
                }
            });
        });
    }

    if (document.querySelector('.benefits__list')) {
        let benefitsSlider;
        let breakpoint = (1200 - 1);
        const benefitsList = document.querySelector('.benefits__list');

        function benefitsSliderFunc() {
            if (window.innerWidth <= breakpoint && benefitsList.dataset.mobile == 'false') {
                benefitsSlider = new Swiper(benefitsList, {
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1.15,
                    spaceBetween: 10,
                    speed: 800,
                    pagination: {
                        el: benefitsList.querySelector('.benefits__pagination'),
                        clickable: true,
                    },
                    breakpoints: {
                        500: {
                            slidesPerView: 1.4,
                            spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: 1.6,
                            spaceBetween: 10,
                        },
                        650: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    },
                });
                benefitsList.dataset.mobile = 'true';
            }
            if (window.innerWidth > breakpoint) {
                benefitsList.dataset.mobile = 'false';

                if (benefitsList.classList.contains('swiper-initialized')) {
                    benefitsSlider.destroy();
                }
            }
        }
        benefitsSliderFunc();
        window.addEventListener('resize', benefitsSliderFunc);

    }

}







// =========================================================================================





window.addEventListener("load", function (e) {
    initSliders();
});





// =========================================================================================
