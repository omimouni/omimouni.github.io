import './style.css'
import Alpine from 'alpinejs';
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap';

window.Alpine = Alpine;

// const lenis = new Lenis()


// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)


// Mouse tracker

// const mouse_tracker = document.querySelector('.mouse-tracker');


window.addEventListener('mousemove', (e) => {
  gsap.to('.mouse-tracker', {
    left: e.clientX - document.querySelector('.mouse-tracker').offsetWidth / 2,
    top: e.clientY - document.querySelector('.mouse-tracker').offsetHeight / 2,
  });
});

window.addEventListener('click', (e) => {
  let tl = gsap.timeline();

  tl.to('.mouse-tracker', {scale: 1.5, duration: 0.1});
  tl.to('.mouse-tracker', {scale: 1});

});