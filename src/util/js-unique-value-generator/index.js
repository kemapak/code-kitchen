// Enable for browser based applications.
// import UniqueValueGenerator from './UniqueValueGenerator.js';

// Enable for node applications.
const UniqueValueGenerator = require('./UniqueValueGenerator.js');

console.log(UniqueValueGenerator.getAlpha(3));
console.log(UniqueValueGenerator.getAlpha(30));
console.log(UniqueValueGenerator.getAlpha(90));
console.log(UniqueValueGenerator.getAlpha(400));

console.log(UniqueValueGenerator.getNumber(14));

console.log(UniqueValueGenerator.getAlphaNumeric(0));
console.log(UniqueValueGenerator.getAlphaNumeric(1.1));

console.log(UniqueValueGenerator.getAlphaNumeric(3));
console.log(UniqueValueGenerator.getAlphaNumeric(5));
console.log(UniqueValueGenerator.getAlphaNumeric(6));
console.log(UniqueValueGenerator.getAlphaNumeric(30));

console.log(UniqueValueGenerator.getId());


