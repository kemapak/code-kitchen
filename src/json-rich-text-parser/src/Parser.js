class Parser {

    /**
     * Parses entire JSON object rich text content recursively.
     *
     * @param jsonObject {Object} JSON object.
     * @returns {Object} Transformed object for UI. Could be text, boldTest, italicText, link, list-item, list and
     * Paragraph.
     */
    static parse(jsonObject) {

        if ((undefined == jsonObject) || (undefined == jsonObject.nodeType)) {

            // Depending on how we want to handle this we can return null, empty string or even throw an exception.
            // throw Error(`Invalid JSON Object "${jsonObject}"`);
            return null;
        }

        switch (jsonObject.nodeType) {
            case 'text': {
                return  Parser.text(jsonObject);
                break;
            }
            case 'boldText': {
                return Parser.boldText(jsonObject);
                break;
            }
            case 'italicText': {
                return Parser.italicText(jsonObject);
                break;
            }
            case 'link': {
                return Parser.link(jsonObject);
                break;
            }
            case 'list-item': {
                return Parser.listItem(jsonObject);
                break;
            }
            case 'list': {
                return Parser.list(jsonObject);
                break;
            }
            case 'paragraph': {
                return Parser.paragraph(jsonObject);
                break;
            }
            default: {
                return null;
                break;
            }
        }
    }

    /**
     * Helper method that transforms text object.
     *
     * @param jsonObject {Object} JSON object.
     * @returns {{Object}|null} Returns transformed text object otherwise null.
     */
    static text(jsonObject) {

        if ((undefined == jsonObject) || (undefined == jsonObject.nodeType)) {

            // Depending on how we want to handle this we can return null, empty string or even throw an exception.
            return null;
        }

        let targetObject = {text: ''};
        targetObject.text = jsonObject.value;

        return targetObject;
    }

    /**
     * Helper method that transforms bold text object.
     *
     * @param jsonObject {Object} JSON object.
     * @returns {{Object}|null} Returns transformed bold text object otherwise null.
     */
    static boldText(jsonObject) {

        if ((undefined == jsonObject) || (undefined == jsonObject.nodeType)) {

            // Depending on how we want to handle this we can return null, empty string or even throw an exception.
            return null;
        }

        let targetObject = {boldText: ''};
        targetObject.boldText = jsonObject.value;

        return targetObject;
    }

    /**
     * Helper method that transforms italic text object.
     *
     * @param jsonObject {Object} JSON object.
     * @returns {{Object}|null} Returns transformed italic text object otherwise null.
     */
    static italicText(jsonObject) {

        if ((undefined == jsonObject) || (undefined == jsonObject.nodeType)) {

            // Depending on how we want to handle this we can return null, empty string or even throw an exception.
            return null;
        }

        let targetObject = {italicText: ''};
        targetObject.italicText = jsonObject.value;

        return targetObject;
    }

    /**
     * Helper method that transforms link object.
     *
     * @param jsonObject {Object} JSON object.
     * @returns {{Object}|null} Returns transformed link object otherwise null.
     */
    static link(jsonObject) {

        if ((undefined == jsonObject) || (undefined == jsonObject.nodeType)) {

            // Depending on how we want to handle this we can return null, empty string or even throw an exception.
            return null;
        }

        let targetObject = {link: {}};
        targetObject.link.text = jsonObject.value;
        targetObject.link.url = jsonObject.data.href;

        return targetObject;
    }

    /**
     * Helper method that transforms list item object.
     *
     * @param jsonObject {Object} JSON object.
     * @returns {{Object}|null} Returns transformed link object otherwise null.
     */
    static listItem(jsonObject) {

        if ((undefined == jsonObject) || (undefined == jsonObject.nodeType) || (!Array.isArray(jsonObject.content))) {

            // Depending on how we want to handle this we can return null, empty string or even throw an exception.
            return null;
        }

        let targetObject = [];

        for (let index = 0, numberOfListElements = jsonObject.content.length; index < numberOfListElements; index++) {
            if (1 === numberOfListElements) {
                targetObject = Parser.parse(jsonObject.content[index]);
            } else {
                targetObject.push(Parser.parse(jsonObject.content[index]));
            }
        }

        return targetObject;
    }

    /**
     * Helper method that transforms list object.
     *
     * @param jsonObject {Object} JSON object.
     * @returns {{Object}|null} Returns transformed list object otherwise null.
     */
    static unorderedList(jsonObject) {

        if ((undefined == jsonObject) || (undefined == jsonObject.nodeType) || (!Array.isArray(jsonObject.content))) {

            // Depending on how we want to handle this we can return null, empty string or even throw an exception.
            return null;
        }

        let listCollection = [];

        for (let index = 0, numberOfLists = jsonObject.content.length; index < numberOfLists; index++) {
            listCollection.push(Parser.parse(jsonObject.content[index]));
        }

        /* TODO this is smelly code, refactor. */

        let targetObject = {};
        targetObject.paragraph = [];
        targetObject.paragraph.push({'list': listCollection});

        return targetObject;
    }

    /**
     * Helper method that transforms paragraph object.
     *
     * @param jsonObject {Object} JSON object.
     * @returns {{Object}|null} Returns transformed paragraph object otherwise null.
     */
    static paragraph(jsonObject) {

        if ((undefined == jsonObject) || (undefined == jsonObject.nodeType) || (!Array.isArray(jsonObject.content))) {

            // Depending on how we want to handle this we can return null, empty string or even throw an exception.
            return null;
        }

        let targetObject = {paragraph: []};

        for (let index = 0, numberOfChildNodes = jsonObject.content.length; index < numberOfChildNodes; index++) {
            targetObject.paragraph.push(Parser.parse(jsonObject.content[index]));
        }

        return targetObject;
    }
}

module.exports = Parser;