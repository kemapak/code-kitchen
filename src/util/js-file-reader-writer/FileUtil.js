const fs = require("fs");

class FileUtil {

    static message = {
        FILE_DOES_NOT_EXITS: ' File does not exists!',
        CANNOT_SAVE_FILE: ' Cannot save file!'
    }

    static readFile(fileLocation) {

        // Checks synchronously if the file exists.
        if (!fs.existsSync(fileLocation)) {
            throw new Error(fileLocation + FileUtil.message.FILE_DOES_NOT_EXITS);
        }

        let data = fs.readFileSync(fileLocation, 'utf8');

        return data;
    }

    static writeFile(fileLocation, contentString) {

        fs.writeFileSync(fileLocation, contentString, 'utf-8', (err) => {
            if (err) {
                throw new Error(fileLocation + FileUtil.message.CANNOT_SAVE_FILE);
                console.log(fileLocation + FileUtil.message.CANNOT_SAVE_FILE);
            };
        });
    }
}

module.exports = FileUtil;
