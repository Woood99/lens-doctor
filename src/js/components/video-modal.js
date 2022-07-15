 import {
     disableScroll
 } from '../functions/disable-scroll';
 import {
     enableScroll
 } from '../functions/enable-scroll';

 // videoJs
 import videojs from 'video.js';


 function videoModal() {
     const modal = document.querySelector('.video-modals');
     const close = modal.querySelector('.video-modals__close');
     const videoModalsList = document.querySelectorAll('[data-video-modal]');
     for (let i = 0; i < videoModalsList.length; i++) {
         videoModalsList[i].setAttribute('data-video-modal-index', i);
     }
     document.querySelectorAll('[data-video-modal]').forEach(el => {
         const video = el.querySelector('.video-modal__video');
         const modalContainer = document.createElement('div');
         modalContainer.classList.add('video-modals__container', 'fade');
         modalContainer.setAttribute('data-video-modal-index', el.getAttribute('data-video-modal-index'));
         modal.append(modalContainer);
         modalContainer.append(video);
         videojs(video);

         function modalOpen() {
             console.log('open');
             modal.querySelectorAll('.video-modals__container').forEach(container => {
                 if (el.dataset.videoModalIndex == container.dataset.videoModalIndex) {
                     modal.classList.add('open');
                     container.classList.add('open');
                     setTimeout(() => {
                         container.classList.add('fade-animate');
                     }, 100);
                 }
             });
             document.body.style.scrollBehavior = 'auto';
             document.documentElement.style.scrollBehavior = 'auto';
             disableScroll();
         }

         function modalClose() {
             modal.querySelectorAll('.video-modals__container').forEach(el => {
                 if (el.classList.contains('open')) {
                     console.log('close')
                     modal.classList.remove('open');
                     el.classList.remove('open', 'fade-animate');
                     enableScroll();
                     document.body.style.scrollBehavior = 'auto';
                     document.documentElement.style.scrollBehavior = 'auto';
                 }
             });
         }
         el.addEventListener('click', modalOpen);
         close.addEventListener('click', () => {
             video.pause();
             modalClose();
         });;
     })
 }
 videoModal()
