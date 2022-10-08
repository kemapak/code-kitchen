import {Animate} from './Animation.js';

window.addEventListener('load', () => {
   document.getElementById('moveButton').addEventListener('click', () => {
       let animation = new Animate();
       animation.fade(document.getElementById('element-to-be-animated'));
       animation.move(document.getElementById('element-to-be-animated'), 500, 10000);
   });
});