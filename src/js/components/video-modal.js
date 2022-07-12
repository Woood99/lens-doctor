import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

// videoJs
import videojs from 'video.js';


function videoModal() {
    const videoModalList = document.querySelectorAll('.video-modal');
    videoModalList.forEach(el => {
        const btn = el.querySelector('.video-modal__poster');
        const start = el.querySelector('.video-modal__start');
        const video = el.querySelector('.video-modal__video');
        const back = el.querySelector('.video-modal__back');
        videojs(video, {

        });
        btn.addEventListener('click', () => {
            if (!start.classList.contains('open')) {
                start.classList.add('open');
                document.querySelector('body').style.overflow = 'hidden';
            }
        });
        back.addEventListener('click', () => {
            if (start.classList.contains('open')) {
                start.classList.remove('open');
                document.querySelector('body').style.overflow = 'visible';
                video.pause();
            }
        });
    })
}
videoModal()

