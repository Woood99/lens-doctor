// Подключение галереи

// Документация: https://www.lightgalleryjs.com/docs/
// Сниппет(HTML): gallery

// Подключение базового набора функционала
import lightGallery from 'lightgallery';

// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom
// import lgMediumZoom from 'lightgallery/plugins/mediumZoom';




function aboutPhotoGallery() {
    const aboutPhoto = document.querySelectorAll('.about-photo__gallery');
    aboutPhoto.forEach(el => {
        lightGallery(el, {
            licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
            speed: 500,
        });
    });
}
aboutPhotoGallery();

function licenceGallery() {
    const licence = document.querySelectorAll('.license-gallery');
    licence.forEach(el => {
        lightGallery(el, {
            licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
            speed: 500,
        });
    });
}
licenceGallery();
