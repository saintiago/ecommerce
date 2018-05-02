const amqp = require('amqplib/callback_api');
const config = require('./config/config');

amqp.connect(config.rabbit.host, function(err, conn) {
    conn.createChannel(function(err, ch) {
        ch.assertQueue(config.queueName);

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", config.queueName);
        ch.consume(config.queueName, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {noAck: true});
    })
}) 