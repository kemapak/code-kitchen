# JavaScript Unique Value Generation Utility

This simple class can be used to generate random values, can be used with unit tests and other application.

## Installation

### Node Applications
- Enable Node module export `module.exports = UniqueValueGenerator;` in **UniqueValueGenerator.js**
  > Do not forget to disable browser import, native ES5 export in **UniqueValueGenerator.js**

- Import UniqueValueGenerator into your application.

  _For example:_

  `const UniqueValueGenerator = require('./UniqueValueGenerator.js');`


### Browser Applications
- Enable Browser module export `export default {UniqueValueGenerator};` in **UniqueValueGenerator.js**
  > Do not forget to disable Node import, native ES5 export in **UniqueValueGenerator.js**

- Import UniqueValueGenerator into your application.

  _For example:_

  `import UniqueValueGenerator from './UniqueValueGenerator.js';`

Click the [link](index.js) to open `index.js` to view how the code works.

## Specifications

### Methods
- `getAlpha(size)`
- `getNumber(size)`
- `getAlphaNumeric(size)`
- `getLoremIpsum(size)`
- `getId()`

## Running
Running the code in Node and Browser is the same. The example `index.js` works on Node.

Type `node index.js` in the same folder from terminal to run the example.

---
Return to [Index](../../../README.md)