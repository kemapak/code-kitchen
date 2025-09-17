const express = require('express');
const serverStatic = require('serve-static');

let server = express();

server.use('/', serverStatic(__dirname + '/'));

server.listen(9000);
console.log('Server running on port 9000...');