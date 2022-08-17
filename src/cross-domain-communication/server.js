const express = require('express');
const cors = require("cors");
const serveStatic = require('serve-static');

let server = express();

server.use(cors({ origin: ["http://localhost:9000", "http://sub.localhost:9000"] }));

server.use('/', serveStatic(__dirname + '/'));
server.use('/style', serveStatic(__dirname + '/../style'));

server.listen(9000);
console.log('Listening on port 9000');

