const dsvToJson = require('./DsvToJson');

//const arguments = process.argv.slice(2);
const arguments = ['data/final-modified.tsv', 'data/final-modified.json'];
console.log('Input: ', arguments);

let dirname = __dirname + '/';
let inputFile = dirname + arguments[0];
console.log(inputFile);
let outputFile = dirname + arguments[1];
console.log(outputFile);

function callback(data) {

    let results = new Array();

    // Start from index one since the 0 index are the column labels.
    for (let rowIndex = 1, numberOfRows = data.length;  rowIndex< numberOfRows; rowIndex++) {

        // Remove BOM, issue with MS Excel only. Zero Width None Breakable Space.
        data[0][0].replace(/﻿/g, '');

        // Check if there is revised message otherwise go to the next row.
        if ('' == data[rowIndex][1].trim()) {
                continue;
        }

        let rejectMessageObject = {};

        for (let columnIndex = 0, labelRow = data[0], row = data[rowIndex], numberOfColumns = row.length; columnIndex < numberOfColumns; columnIndex++) {

            rejectMessageObject[labelRow[columnIndex]] = row[columnIndex].trim();
        }

        results.push(rejectMessageObject);
    }

    return JSON.stringify(results);
}

dsvToJson.convertFile(inputFile, outputFile, '\t', callback);


