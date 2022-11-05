const dsvToJson = require('./DsvToJson');

/*
    Example callback.
    Replaces the value to 'xx' if the row and column have the same index, excluding the header row index.
 */
function callback(data) {

    // Start from index one since the 0 index are the column labels.
    for (let rowIndex = 1, numberOfRows = data.length;  rowIndex< numberOfRows; rowIndex++) {

        for (let columnIndex = 0, numberOfColumns = data[0].length; columnIndex < numberOfColumns; columnIndex++){

            if (rowIndex - 1 == columnIndex) {
                data[rowIndex][columnIndex] = 'xx'
            }
        }
    }

    return JSON.stringify(data);
}

dsvToJson.convertFile('data/tab-example.tsv', 'data/tab-example.json', '\t', callback);
dsvToJson.convertFile('data/comma-example.csv', 'data/comma-example.json', '\,', callback);



