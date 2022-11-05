# Convert DSV to JSON

This utility converts a delimiter seperated file to a JSON file. It supports comma, tab or any other delimiter.
This utility also excepts an optional callback function where you can update, clean the data.

## Specifications

This is a static utility class.

### Class
- `DsvToJson`

### Methods
- `read(fileLocation)`
- `write(fileLocation, contentString)`
- `convertFile(inputFileLocation, outputFileLocation, delimiter, callback)`
- `convertString(dsvString, delimiter, callback)`
- `createJsObject(dsvString, delimeter)`

### Exceptions and Error Messages
- `INPUT_FILE_MISSING: 'inputFileLocation parameter is not provided or it is not a String.'`
- `OUTPUT_FILE_MISSING: 'outputFileLocation parameter is not provided or it is not a String.'`
- `DELIMITER_MISSING: 'delimiter parameter is not provided or it is not a String.'`
- `CALLBACK_IS_NOT_A_FUNCTION: 'Callback you provided is not a function!, please prove a parameter that is a function.'`

## Data Setup
- Make sure you only have one worksheet in your excel/numbers file.
- Use Numbers (Not excel) to convert the data to delimiter separated value file.
- Excel does not keep the file encoding for exporting files to tab separated values.

> Please keep in mind if your data has commas in the cell, you cannot use CSV.
> TSV (Tab Seperated Value) could be a good alternative.

- input file needs to be in Delimiter Separated Value (CSV, TSV, etc)
- output file needs to have a `.JSON` extension.

## Running

> You need to have node installed in your system.

From terminal/command line type the following.

Type and run the example converter execute the code below in your terminal. Or you can choose your own converter. 

`node exampleConverter.js` or your own converter. 

Optionally you can pass a callback function in your converter. In the *exampleConverter.js* file there is an example 
callback function.

The example input data is in [data folder](./data). Results are added into this folder as well. You can select and customize
where the input and out files are. See the [exampleConverter.js](exampleConverter.js) file.

_For Example:_
`dsvToJson.convertFile('data/tab-example.tsv', 'data/tab-example.json', '\t', callback);`
`dsvToJson.convertFile('data/comma-example.csv', 'data/comma-example.json', '\,', callback);`

In our converter we both convert csv and tsv files in this example.

---
Return to [Index](../../../README.md)