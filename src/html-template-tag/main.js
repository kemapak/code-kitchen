'use strict';
/*
 Test to see if the browser supports the HTML template element by checking
 for the presence of the template element's content attribute.
*/
function load() {

    // Instantiate the table with the existing HTML tbody
    // and the row with the template
    let template = document.querySelector('#productRowTemplate');
    let td = template.content.querySelectorAll('td');

    // Reference to table body.
    let tbody = document.querySelector('tbody');

    for (let productIndex = 0, numberOfProducts = products.length; productIndex < numberOfProducts; productIndex++) {

        td[0].textContent = products[productIndex].upcCode;
        td[1].textContent = products[productIndex].type;

        // Clone the new row and insert it into the table
        let clone = document.importNode(template.content, true);
        tbody.appendChild(clone);
    }
}

let products = [
    {
        upcCode: '12345',
        type: 'Arturo Fuente 898 Maduro'
    },
    {
        upcCode: '67890',
        type: 'La Flor Dominicana Suave #4'
    },
    {
        upcCode: '22334',
        type: 'Romeo Julietta Churchill'
    },
    {
        upcCode: '67120',
        type: 'H. Uppman Half Corona'
    },
    {
        upcCode: '99342',
        type: 'Arturo Fuente Opus X Double Corona'
    }
];

window.addEventListener('load', load);
