'use strict';

document.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('submit form');
});

document.addEventListener('click', () => {
    console.log('click');
});