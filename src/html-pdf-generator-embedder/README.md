# PDF URL generator and embedder

## Objective
Sometimes we do not get URLs for images, documents, like in the case PDF.
We can easly assign the data to an image if the data type is image or if the data is document to object or embed tags.
Unfortunately this does not work for all the browser (Safari is again the usual culprit here)
So this approach generates an URL on the fly and assign the corresponding tag this works for every browser.

## Installation
- The examples do require Node.js, please make sure you have it install.
- installation `npm install`

## Running examples
- start express server `npm run server`
    - You can stop the server by pressing `ctrl & c`
    - The server updates automatically for HTML and JS files but if you make a change in the server code you need to restart your server
- To run URL example open [http://localhost:9001/index.html)

## Usage
Open your debugger, and analyze the code.
Please check both JavaScript and HTML files as well as the base64 PDF converted text file.

## Refernces
- [PDF to Base64 converter I used](https://base64.guru/converter/encode/pdf)
- [JavaScript File system](https://developer.mozilla.org/en-US/docs/Web/API/File_API)
- [JavaScript Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
- [JavaScript URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)

---
Return to [Index](../../README.md)