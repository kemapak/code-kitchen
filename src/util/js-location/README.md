# JavaScript Location/URL Utility

This simple **static** utility class can be used to analyze URL parts.

## Installation
This utility only works for browsers. Said that it can be easily modified to be used to analyze any URL string if wanted.

### Browser Applications

- Import Location into your application.

  _For example:_

  `import {Location} from './Location.js';`

Click the [link](main.js) to open `main.js` to view how the code works.

## Specifications
This is a **static class** so all methods must be invoked via the class name.

### Methods
- `Location.getProtocol()`
- `Location.getHostName()`
- `Location.getPort()`
- `Location.getPathName()`
- `Location.getHash()`
- `Location.getSearchParameters()`

## Usage

Lets' assume that the URL is 

`http://localhost:63342/code-kitchen/src/util/js-location/index.html?_ijt=fsa23a018gekd3doa7kfitvicu&_ij_reload=RELOAD_ON_SAVE#summary`

Below will be results of the APIs

| API                                                                                                | Value                                  |
|----------------------------------------------------------------------------------------------------|----------------------------------------|
| Location.getProtocol()                                                                             | http                                   |
| Location.getHostName()                                                                             | localhost                              |
| Location.getPort()                                                                                 | 63342                                  |
| Location.getPathName()                                                                             | /code-kitchen/src/util/js-location/index.html |                               
| Location.getHash()                                                                                 | summary                                |                                                                             
| Location.getSearchParameters() | `{"_ijt":"fsa23a018gekd3doa7kfitvicu","_ij_reload":"RELOAD_ON_SAVE"}`| 

## Running
You must use a local or external web server to test the code. Because of CORS the browsers will block the module using the file system.

Open the [index.html](./index.html) from your server and observe the behavior.

---
Return to [Index](../../../README.md)