// Creating an Object via Instantiation.
let simpleObject = {};

// Creating an Object literally
let literalObject = {
    name: 'John', lastName: 'Doe', doTalk: function () {
        console.log('I am talking!');
    }
}

/*
    Creating an Object mimicking a class.
    Please note this is not instaintiated.
    value: Value of the property.
    writable: If the value of the property can be changed.
    configurable: If the type of this property can be changed (and writable can be changed) and the property can be deleted.
    enumerable: If the property is shown during the properties enumeration of the object.
 */
let person = Object.create({
        talk: function () {
            alert(this.name + ' is talking');
        }
    },

    {
        name: {
            value: 'John',
            writable: true, // Enumerable: If the property is shown during the properties enumeration the object.
            enumerable: true, // Configurable: If the type of this property can be change or the property can be deleted.
            configurable: false
        }, lastName: {
            value: 'Doe',
            writable: true, // Enumerable: If the property is shown during the properties enumeration the object.
            enumerable: true, // Configurable: If the type of this property can be change or the property can be deleted.
            configurable: false
        }, gender: {
            value: 'M',
            writable: true, // Enumerable: If the property is shown during the properties enumeration the object.
            enumerable: true, // Configurable: If the type of this property can be change or the property can be deleted.
            configurable: false
        }, age: {

            get: function () {
                if (this.gender == 'M') {
                    return value;
                } else {
                    return 21;
                }
            },
            set: function (newValue) {
                let value = newValue;
            },
            enumerable: true, // Enumerable: If the property is shown during the properties enumeration the object.
            configurable: false // Configurable: If the type of this property can be change or the property can be deleted.
        }
    });


