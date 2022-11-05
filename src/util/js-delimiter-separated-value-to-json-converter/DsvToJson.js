const FileUtil = require ('../js-synchronous-file-reader-writer/FileUtil');

/**
 * This static utility class converts a delimiter separated value (DSV) file into JSON.
 * It accepts any delimiter type, and a custom callback method that further formats, cleans data.
 *
 * @author Kem Apak
 */
class DsvToJson {

    static message = {
        INPUT_FILE_MISSING: 'inputFileLocation parameter is not provided or it is not a String.',
        OUTPUT_FILE_MISSING: 'outputFileLocation parameter is not provided or it is not a String.',
        DELIMITER_MISSING: 'delimiter parameter is not provided or it is not a String.',
        CALLBACK_IS_NOT_A_FUNCTION: 'Callback you provided is not a function!, please prove a parameter that is a function.'
    }

    /**
     * Utility methods that reads a file and returns its String content.
     *
     * @param fileLocation {String}
     * @returns {String}
     */
    static read(fileLocation) {
        let fileString = FileUtil.readFile(fileLocation);

        // Remove BOM, issue with MS Excel only. Zero Width None Breakable Space.
        fileString = fileString.replace(/﻿/g, '');

        // Remove BOM, Zero Width Space, issue with Excel and Numbers.
        fileString = fileString.replace(/​/g, '');

        // Remove double quotes ". When there is a comma in a string excel, number wraps the text cell with quotes automatically.
        fileString = fileString.replace(/\"/g, '');

        return fileString;
    }

    /**
     * Utility methods that writes a string into a file.
     *
     * @param fileLocation {String}
     * @param contentString {String}
     */
    static write(fileLocation, contentString) {
        FileUtil.writeFile(fileLocation, contentString);
    }

    /**
     * Converts a Delimiter Separated Value file into a JSON file.
     *
     * @param inputFileLocation
     * @param outputFileLocation
     * @param delimiter ',' '\t' or any other delimiter.
     * @param callback Custom callback function (Optional).
     * @throws Error if inputFileLocation parameter is not provided.
     * @throws Error if outputFileLocation parameter is not provided.
     * @throws Error if delimeter parameter is not provided.
     */
    static convertFile(inputFileLocation, outputFileLocation, delimiter, callback) {

        // inputFileLocation parameter is not provided.
        if('undefined' == typeof inputFileLocation && 'string' != typeof inputFileLocation) {

            console.log(DsvToJson.message.INPUT_FILE_MISSING);
            throw new Error(DsvToJson.message.INPUT_FILE_MISSING);
        }

        // outputFileLocation parameter is not provided.
        if('undefined' == typeof outputFileLocation && 'string' != typeof outputFileLocation) {

            console.log(DsvToJson.message.OUTPUT_FILE_MISSING);
            throw new Error(DsvToJson.message.OUTPUT_FILE_MISSING);
        }

        // delimiter parameter is not provided.
        if('undefined' == typeof delimiter && 'string' != typeof delimiter) {

            console.log(DsvToJson.message.DELIMITER_MISSING);
            throw new Error(DsvToJson.message.DELIMITER_MISSING);
        }

        let dsvString = DsvToJson.read(inputFileLocation);
        let jsonString = DsvToJson.convertString(dsvString, delimiter, callback);
        DsvToJson.write(outputFileLocation, jsonString);
    }

    /**
     * Converts a Delimiter Separated Value String into JSON.
     *
     * @param dsvString
     * @param delimiter ',' '\t' or any other delimiter.
     * @param callback Custom callback function (Optional)
     * @returns {string} JSON
     * @throws Error dsvString String parameter is not provided.
     * @throws Error delimiter parameter is not provided.
     * @throws Error callback parameter is not a function.
     */
    static convertString(dsvString, delimiter, callback) {

        // dsvString Separated String parameter is not provided.
        if('undefined' == typeof dsvString && 'string' != typeof dsvString) {

            console.log(DsvToJson.message.DELIMITER_MISSING);
            throw new Error(DsvToJson.message.DELIMITER_MISSING);
        }

        // delimiter parameter is not provided.
        if('undefined' == typeof delimiter && 'string' != typeof delimiter) {

            console.log(DsvToJson.message.DELIMITER_MISSING);
            throw new Error(DsvToJson.message.DELIMITER_MISSING);
        }

        // callback function is not a function.
        if ('undefined' != typeof callback && 'function' != typeof callback) {

            console.log(DsvToJson.message.CALLBACK_IS_NOT_A_FUNCTION);
            throw new Error(DsvToJson.message.CALLBACK_IS_NOT_A_FUNCTION);
        }

        let jsonData = DsvToJson.createJsObject(dsvString, delimiter);

        // If no callback function is provided return default.
        if ('undefined' == typeof callback) {

            return jsonData;
        } else {

            let processedJsonData = callback(jsonData);
            return processedJsonData;
        }
    }

    /**
     * Create JavaScript array of arrays that represents rows and columns. Removes empty rows.
     * @param dsvString
     * @param delimiter ',' '\t' or any other delimiter.
     * @returns {any[]}
     */
    static createJsObject(dsvString, delimeter) {

        // Convert lines to  line arrays.
        let rawLines = dsvString.split(/\r\n|\n/);
        let processedLines= new Array();

        // Convert lines to cells arrays.
        for (let lineIndex = 0, numberOfLines = rawLines.length; lineIndex < numberOfLines; lineIndex++) {
            let line = rawLines[lineIndex];

            // Handle blank lines.
            if ('' == line) {
                continue;
            }

            let cells = line.split(delimeter);

            processedLines.push(cells);
        }

        return processedLines;
    }
}

module.exports = DsvToJson;
