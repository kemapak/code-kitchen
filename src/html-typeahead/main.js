import TypeAhead from './typeahead.js';

window.addEventListener('load', ()=> {
   document.getElementById('typeAheadListBox').addEventListener('keyup', (event)=> {
       console.log('keyup event triggered');


       let parentElement = element.parentElement;
       let childrenCount = parentElement.childElementCount;

       let searchIndex = 0;

       switch (event.key) {
           case 'Enter': {

           }
           case 'ArrowUp': {
               let element = event.target;
               let elementIndex = element.getAttribute('data-typeahead-index');

               parentElement.children[(elementIndex - 1) % childrenCount].focus();
           }
           case 'ArrowDown': {
               let element = event.target;
               let elementIndex = element.getAttribute('data-typeahead-index');

               parentElement.children[(elementIndex + 1) % childrenCount].focus();
           }
           case 'Enter': {}
           case ' ': {

           }
           case 'Escape': {}


       }
   })
});