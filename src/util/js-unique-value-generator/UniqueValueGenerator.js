class UniqueValueGenerator {

    static message = {
        size: 'Not a number and/or not a valid positive integer.'
    }

    static getAlpha(size) {
        if (!UniqueValueGenerator.checkSize(size)) {
            console.log(UniqueValueGenerator.message.size);
            return false;
        }

        let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien et. Donec massa sapien faucibus et molestie ac feugiat. Maecenas pharetra convallis posuere morbi leo urna. Libero nunc consequat interdum varius sit amet mattis vulputate. Leo in vitae turpis massa sed elementum tempus egestas sed. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Mauris a diam maecenas sed enim ut. Eget duis at tellus at urna condimentum mattis pellentesque. Tellus cras adipiscing enim eu. Amet consectetur adipiscing elit ut aliquam purus sit amet. Adipiscing elit pellentesque habitant morbi. Erat nam at lectus urna. Lacus sed viverra tellus in hac habitasse. Elementum eu facilisis sed odio morbi. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Potenti nullam ac tortor vitae purus faucibus. Faucibus nisl tincidunt eget nullam non nisi est. Quisque sagittis purus sit amet.';

        let returnString = '';

        while (size > loremIpsum.length) {
            returnString += loremIpsum;
            size = size - loremIpsum.length;
        }

        returnString += loremIpsum.substring(0, size);

        return returnString;
    }

    static getAlphaNumeric(size) {
        if (!UniqueValueGenerator.checkSize(size)) {
            console.log(UniqueValueGenerator.message.size);
            return false;
        }

        let returnAlphaNumeric = '';

        let reminder = size % 5;
        returnAlphaNumeric += (Math.random() + 1).toString(36).substring(7).slice(0, reminder);

        while (size >= 5) {
            returnAlphaNumeric += (Math.random() + 1).toString(36).substring(7);
            size = size - 5;
        }

        return returnAlphaNumeric;
    }

    static getNumber(size) {
        if (!UniqueValueGenerator.checkSize(size)) {
            console.log(UniqueValueGenerator.message.size);
            return false;
        }
        return Number(Math.random().toPrecision(size)) * Math.pow(10, size);
    }

    static getId() {
        let idTime = (new Date()).getTime().toString();
        let idRandom = Number(Math.random().toPrecision(5).toString().substring(2)).toString();
        return (idTime + '.' + idRandom);
    }

    static checkSize(size) {
        if (('undefined' == typeof size) || ('number' != typeof size) || (0 >= size) || !Number.isInteger(size)) {
            return false;
        }

        return true;
    }
}


// Enable for browser based applications.
// export default {UniqueValueGenerator};

// Enable for node applications.
module.exports = UniqueValueGenerator;