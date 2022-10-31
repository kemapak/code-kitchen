function loadProduct() {

    let product = new Table('productTable','productRowTemplate');

    document.getElementById('addProductRow').addEventListener('click', () => {
       product.addRow();
    });

    // Use delegator pattern to handle row action buttons.
    document.querySelectorAll('#productTable tbody')[0].addEventListener('click', (event)=> {
        product.handleRowAction(event);
    });
}

function loadUser() {

    let user = new Table('userTable', 'userRowTemplate');

    document.getElementById('addUser').addEventListener('click', () => {
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        user.addRow(firstName, lastName);
    });

    // Use delegator pattern to handle row action buttons.
    document.querySelectorAll('#userTable tbody')[0].addEventListener('click', (event)=> {
        user.handleRowAction(event);
    });
}

window.addEventListener('load', () => {

    loadProduct();
    loadUser();
});