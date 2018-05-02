// TODO Refactor this with RxJS
const http = require('http');
const url = require('url');
const config = require('./config/config');
const qm = require('./service/queueManager');

const server = http.createServer();

server.on('request', (request, response) => {
    
    request.on('error', error => {
        console.error(error);
        response.statusCode = 404;
        response.end(`Error occurred: ${error.message}`);
    });

    response.on('error', error => {
        console.log(error);
    });

    let command = '';
    request.on('data', data => command += data);
    request.on('end', () => {
        qm.queueCommand(JSON.parse(command));
    });

    response.end('OK');

});

server.listen(config.port, error => {
    if (error) {
        console.log(error);
    }
    
    console.log(`Queue is on ${config.port} port`);
})