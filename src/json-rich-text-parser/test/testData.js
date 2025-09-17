let text = {
    "raw": {
        "nodeType": "text",
        "value": "This is plain text."
    },
    "parsed": {
        "text": "This is plain text."
    }
}

let boldText = {
    "raw": {
        "nodeType": "boldText",
        "value": "bold"
    },
    "parsed": {
        "boldText": "bold"
    }
}

let italicText = {
    "raw": {
        "nodeType": "italicText",
        "value": "italic"
    },
    "parsed": {
        "italicText": "italic"
    }
}

let link = {
    "raw" : {
        "nodeType": "link",
        "data": {
            "href": "http://www.softwarenotes.net/",
            "target": "_blank",
            "linkType": "regular"
        },
        "value": "SoftwareNotes web page"
    },
    "parsed" : {
        "link" : {
            "text" : "SoftwareNotes web page",
            "url": "http://www.softwarenotes.net/"
        }
    }
}

let listItemSimple = {
    "raw" : {
        "nodeType": "list-item",
        "content": [
            {
                "nodeType": "text",
                "value": "This is plain text inside a list item."
            }
        ]
    },
    "parsed" : {
        "text": "This is plain text inside a list item."
    }
}

let listItemComplex = {
    "raw" : {
        "nodeType": "list-item",
        "content": [
            {
                "nodeType": "text",
                "value": "This is plain text inside a list item."
            },
            {
                "nodeType": "link",
                "data" : {
                    "href": "http://www.softwarenotes.net/",
                    "target": "_blank",
                    "linkType": "regular"
                },
                "value": "SoftwareNotes web page"
            }
        ]
    },
    "parsed" : [
        {
            "text": "This is plain text inside a list item."
        },
        {
            "link" : {
                "text" : "SoftwareNotes web page",
                "url": "http://www.softwarenotes.net/"
            }
        }
    ]
}

let unorderedList = {
    "raw": {
        "nodeType": "unordered-list",
        "content": [
            {
                "nodeType": "list-item",
                "content": [
                    {
                        "nodeType": "text",
                        "value": "This is plain text inside a list item ONE."
                    }
                ]
            },
            {
                "nodeType": "list-item",
                "content": [
                    {
                        "nodeType": "text",
                        "value": "This is plain text inside a list item TWO."
                    }
                ]
            }
        ]
    },
    "parsed": {
        "paragraph": [
            {
                "list" : [
                    {"text": "This is plain text inside a list item ONE."},
                    {"text": "This is plain text inside a list item TWO."}
                ]
            }
        ]
    }
}

let paragraph = {
    "raw" : {
        "nodeType": "paragraph",
        "content": [
            {
                "nodeType": "text",
                "value": "This is plain text inside a paragraph."
            }
        ]
    },
    "parsed" : {
        "paragraph" : [
            {
                "text": "This is plain text inside a paragraph."
            }
        ]
    }
}

module.exports = {text, boldText, italicText, link, listItemSimple, listItemComplex, unorderedList, paragraph};