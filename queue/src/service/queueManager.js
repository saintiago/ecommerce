const amqp = require('amqplib');
const config = require('../config/config');

const ready = amqp.connect(config.rabbit.host)
.then(conn => conn.createChannel());

const queueCommand = function(command) {
    ready
    .then(ch => {
        return ch.assertQueue(config.queueName)
            && ch.sendToQueue(config.queueName, Buffer.from(JSON.stringify(command)));
    })
    .then(
        res => {
            if (res) {
                console.log(`Command added to queue: ${JSON.stringify(command)}`)
            } else {
                console.error(`Error queueing command: ${JSON.stringify(command)}`)
            }
        },
        err => console.error(err.message)
    );
}

module.exports = { queueCommand };