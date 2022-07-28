const path = require('path');

const express = require('express');
const apiServer = express();
apiServer.use(express.static(path.join(__dirname, '../../public')));
apiServer.use('/', express.static('index.html'));

module.exports = apiServer;
