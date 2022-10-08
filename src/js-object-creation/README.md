# JavaScript Object Creation

Click the [link](index.js) to open `index.js` with a code editor.

This is a very interesting example how we can create objects in JavaScript. This is not exactly literal creation 
`let person={name: 'John'}` or with instantiating an object `let person = new Object();`.

It is very important to know and remember that we have this approach before real classes added to JavaScript language. 
Nowadays, this approach is rarely needed or used. Since this approach try to mimic a class creation instead using 
JavaScript **functions** as classes and try to find a better way to create fields via using **objects**.

This object has a special way of creating fields with **getters** and **setter**, as well adding behavior to these 
fields like **changeable**, **enumerable**, etc. Also, it adds a **prototype** to add functionality mimicking 
**methods** of an actual class.

For more information please check Mozilla Developer Network [Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) and 
[Object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).

---
Return to [Index](../../README.md)