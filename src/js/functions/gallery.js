// Подключение галереи

// Документация: https://www.lightgalleryjs.com/docs/
// Сниппет(HTML): gallery

// Подключение базового набора функционала
import lightGallery from 'lightgallery';

// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom
// import lgVideo from 'lightgallery/plugins/video';




function aboutPhotoFunc() {
    const aboutPhoto = document.querySelectorAll('.about-photo__gellery');
    aboutPhoto.forEach(el => {
        lightGallery(el, {
            licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
            speed: 500,
        });
    });
}
aboutPhotoFunc();