/**
 * This is textarea web component.
 * It extends textarea tag with word count functionality.
 *
 * @author: Kem Apak
 */
class Textarea extends HTMLTextAreaElement {

    #numberOfCharacters = 0;

    static message = {
        NUMBER_OF_CHARACTERS: ' Number of characters.'
    }

    constructor() {
        super();

        let spanElement = document.createElement('span');
        spanElement.setAttribute('class', 'textarea-word-count');
        spanElement.textContent = this.value.length + Textarea.message.NUMBER_OF_CHARACTERS;
        this.insertAdjacentElement("afterend", spanElement);

        let maxlengthAttribute = Number.parseInt(this.getAttribute('maxlength'));

        if (('number' == typeof maxlengthAttribute) && (maxlengthAttribute > 0)) {
            this.addEventListener('keyup', (e) => {
                this.updateWordCount(this, spanElement, e);
            });
        }
    }

    /**
     * Updates the word count of the textarea, changes the class if less than 5 characters left for the limit.
     *
     * @param textarea Element
     * @param event Event
     */
    updateWordCount(textarea, span, event) {

        if (textarea != event.target) {
            return;
        }

        let maxLength = Number.parseInt(textarea.getAttribute('maxlength'));
        let length = textarea.value.length;

        span.textContent = length + Textarea.message.NUMBER_OF_CHARACTERS;

        if (maxLength - length < 5) {
            span.setAttribute('class', 'textarea-word-count alert');
        } else {
            span.setAttribute('class', 'textarea-word-count');
        }
    };
}

// Define the new element
customElements.define('brk-textarea', Textarea, { extends: 'textarea' });
export default {Textarea};
