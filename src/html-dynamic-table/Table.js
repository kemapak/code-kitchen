class Table {

    #template;
    #tbody;

    constructor(tableId, templateRowId) {
        this.#template = document.querySelector('#' + templateRowId);
        this.#tbody = document.querySelector('#' + tableId + ' tbody');
    }

    addRow() {
        if (arguments.length > 0) {
            let cellInputs = this.#template.content.querySelectorAll('td input');
            for (let argumentIndex = 0, cellIndex = 0, numberOfArguments = arguments.length; argumentIndex < numberOfArguments; argumentIndex++, cellIndex++) {
                cellInputs[cellIndex].value = arguments[argumentIndex];
            }
        }

        let clone = document.importNode(this.#template.content, true);
        this.#tbody.appendChild(clone);
    }

    editRow(rowElement) {
        let inputs = rowElement.querySelectorAll('input[type="text"]');

        for (let index = 0, numberOfInputs = inputs.length; index < numberOfInputs; index++) {
            inputs[index].removeAttribute('readonly');

        }

        let actionButton = rowElement.querySelectorAll('input[type="button"][value="Edit"]')[0];
        actionButton.setAttribute('value', 'Save');
    }

    saveRow(rowElement) {
        let inputs = rowElement.querySelectorAll('input[type="text"]');

        for (let index = 0, numberOfInputs = inputs.length; index < numberOfInputs; index++) {
            inputs[index].setAttribute('readonly', true);
        }

        let actionButton = rowElement.querySelectorAll('input[type="button"][value="Save"]')[0];
        actionButton.setAttribute('value', 'Edit');
    }

    deleteRow(rowElement) {
        rowElement.remove();
    }

    handleRowAction(event) {
        let srcElement = event.target;

        if ('INPUT' != srcElement.tagName) {
            return;
        }
        if ('button' != srcElement.getAttribute('type')) {
            return;
        }

        let row = srcElement.parentElement.parentElement;

        if ('TR' != row.tagName) {
            return;
        }

        if ('Remove' == srcElement.value) {
            this.deleteRow(row);
            return;
        }

        if ('Edit' == srcElement.value) {
            this.editRow(row);
            return;
        }

        if ('Save' == srcElement.value) {
            this.saveRow(row);
            return;
        }
    }
}