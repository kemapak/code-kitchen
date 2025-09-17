const FileUtil = require('./FileUtil.js');
const express = require('express');
const serverStatic = require('serve-static');

let pdfFile = (FileUtil.readFile(__dirname + '/Sample.base64Pdf.txt'));

let server = express();

server.use('/', serverStatic(__dirname + '/'));

server.get('/pdf', (req, res) => {

    res.contentType('text/plain');
    res.send(pdfFile);
});

server.listen(9001);
console.log('Listening on port 9001');