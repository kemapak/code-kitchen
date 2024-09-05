/**
 * This is typeahead web component example.
 * It extends HTML input type text tag.
 *
 * @author: Kem Apak
 */
class TypeAhead extends HTMLInputElement {

    constructor() {

        super();

        // create list element.
        const listElement = document.createElement("ul");
        listElement.setAttribute("class", "plain-list");
        listElement.setAttribute("role", "listbox");

        this.insertAdjacentElement("afterend", listElement);

        listElement.addEventListener('keyup', this.listItemKeyupHandler);
        // listElement.addEventListener('keyup', this.keyboardEventHandler);
        listElement.addEventListener('click', this.listClickHandler);

        // Temporary for testing.
        for (let index = 0, listItemElement; index < 7; index++) {
            listItemElement = document.createElement('li');
            listItemElement.setAttribute('role', 'listbox');
            listItemElement.textContent = index + 'asfasdf';
            listItemElement.addEventListener('focus', this.listItemFocusHander);
            listItemElement.setAttribute('tabindex', '-1');

            listElement.appendChild(listItemElement);
        }


    //     // Get all the branches.
    //     const uls = Array.from(this.querySelectorAll('ul'));
    //
    //     uls.forEach(ul => {
    //
    //         // Hide each child branch.
    //         ul.style.display = 'none';
    //
    //         // Get the LI parent element of the UL.
    //         let li = ul.parentNode;
    //
    //         /* Very important note. Remember that these apply to all child LI elements of the current LI.
    //            We are handling the both styles and events and overriding or short circuiting them.
    //          */
    //         li.setAttribute('class', 'closed');
    //         li.addEventListener('click', (e) => {
    //             this.toggle(li, e);
    //         });
    //
    //         li.style.cursor = 'pointer';
    //     });
    }

    listItemKeyupHandler(event) {
        // debugger;
        let text = event.target.innerText;
        console.log('key up ', text);
        TypeAhead.keyboardEventHandler(event);
    }

    listClickHandler(event) {
        // debugger;
        let srcElement = event.target;
        if ('li' == srcElement.tagName.toLowerCase()) {
            srcElement.setAttribute('tabindex', '0');
            console.log('click ', srcElement?.innerText);
            srcElement.setAttribute('class', 'focus');
        }
    }

    listItemFocusHander(event) {
        let srcElement = event.target;
        if ('li' == srcElement.tagName.toLowerCase()) {
            srcElement.setAttribute('tabindex', '0');
        }
    }

    static keyboardEventHandler(event) {

        if (!event || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }
        console.log('Key type: ', event.key);

        switch (event.key) {
            case 'Enter': {

            }
            case 'ArrowUp': {}
            case 'ArrowDown': {}
            case 'Enter': {}
            case ' ': {

            }
            case 'Escape': {}
                

        }
    }
    /**
     * Toggles the LI elements that have children UL elements.
     *
     * @param li List element
     * @param event Event
     */
    toggle(li, event) {

        // We want to make sure when the child LI receives the event it does not bubble up to the parent LI.
        event.cancelBubble = true;

        /* Since all the child LIs elements are registered the click event we only want the parent
           LI element take action. None of the child LI elements, in other words the leaves will have children
           and therefore cannot collapse or expand.
         */

        if (li != event.target) {
            return;
        }

        /*
            The UL child element comes after the LI text node.
         */
        let childUlElement = event.target.childNodes[1];

        // Safeguard for not well form markup.
        if ('UL' != childUlElement.nodeName) {
            return;
        }

        // Toggle the display and class
        if (childUlElement.style.display == 'block') {
            childUlElement.style.display = 'none';
            childUlElement.parentNode.setAttribute('class', 'closed');
        } else {
            childUlElement.style.display = 'block';
            childUlElement.parentNode.setAttribute('class', 'open');
        }
    };
}

// Define the new element
customElements.define('brk-typeahead', TypeAhead, { extends: 'input' });
export default {TypeAhead};
