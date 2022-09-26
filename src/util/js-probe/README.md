# JavaScript Probe Utility

This simple class can be used to measure performance of certain JavaScript code.

## Installation

### Node Applications
- Enable Node module export `module.exports = Probe;` in **Probe.js**
    > Do not forget to disable browser import, native ES5 export in **Probe.js**

- Import Probe into your application.

    _For example:_

    `const Probe = require('./Probe.js');`


### Browser Applications
- Enable Browser module export `export {Probe};` in **Probe.js**
  > Do not forget to disable Node import, native ES5 export in **Probe.js**

- Import Probe into your application.

  _For example:_

  `import {Probe} from './Probe.js';`

Click the [link](index.js) to open `index.js` to view how the code works.

## Specifications

### Constructor
`Probe(label)` Label is type String.

### Getters
- `label`
- `startTime`
- `stopTime`
- `elapsedTime`

### Methods
- `startTimer()`
- `stopTimer()`

## Usage
1. Instantiate Probe class.

    _For example:_ 
    
    `let myProbe = new Probe('measureRead');`
    
    > You can get the probe label by `myProbe.label`.
    
    > Probe is created as an instantiable class to enable multiple probes running at the same time.

2. Start probe timer

    _For example:_
    
    `myProbe.startTimer();`
    
    > You can get start time by `myProbe.startTime`.

3. Stop probe timer

    _For example:_
    
    `myProbe.stopTimer();`
    
    > You can get stop time by `myProbe.startTime` and elapsed time by `myProbe.elapsedTime`

## Running
Running the code in Node and Browser is the same. The example `index.js` works on Node.

Type `node index.js` in the same folder from terminal to run the example.

---
Return to [Index](../../../README.md)