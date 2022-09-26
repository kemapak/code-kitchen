import {Location} from './Location.js';

window.addEventListener('load', ()=> {

   // Reference to the template and cells.
   let template = document.querySelector('#rowTemplate');
   let td = template.content.querySelectorAll('td');

   // Reference to table body.
   let tbody = document.querySelector('tbody');

   // We only want custom methods and ignore all inherit properties and the constructor.
   let methodNames = Object.getOwnPropertyNames(Location).filter(name => ('constructor' !== name && 'function' === typeof Location[name]));

   methodNames.forEach((value) => {

      td[0].textContent = 'Location.' + value + '()';
      td[1].textContent = Location[value]();

      if ('getSearchParameters' == value) {

         td[1].textContent = '';
         let paramMap = Location[value]();
         if (paramMap.size > 0) {
            let paramObject = Object.fromEntries(paramMap);
            td[1].textContent = JSON.stringify(paramObject);
         }
      }

      // Clone the new row and insert it into the table.
      let clone = document.importNode(template.content, true);
      tbody.appendChild(clone);
   });
});
