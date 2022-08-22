/**
 * This is tree/expandable list web component.
 * It extends UL tag.
 *
 * @author: Kem Apak
 */
class Tree extends HTMLUListElement {
    constructor() {
        // self is the UL element. super() returns the element.
        self = super();

        // Get all the branches.
        const uls = Array.from(self.querySelectorAll('ul'));

        uls.forEach(ul => {

            // Hide each child branch.
            ul.style.display = 'none';

            // Get the LI parent element of the UL.
            let li = ul.parentNode;

            /* Very important note. Remember that these apply to all child LI elements of the current LI.
               We are handling the both styles and events and overriding or short circuiting them.
             */
            li.setAttribute('class', 'closed');
            li.addEventListener('click', (e) => {
                self.toggle(li, e);
            });

            li.style.cursor = 'pointer';
        });
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
customElements.define('brk-tree', Tree, { extends: 'ul' });
export default {Tree};
