// @flow
'use strict';

import * as amqp from 'amqplib';
import {config} from './config';
import type {Command} from './types';

const queueCommand = function(command: Command): void {
    const queueName = command.type;
    amqp.connect(config.queueConnection.host).then(function(conn) {
        return conn.createChannel().then(function(ch) {
            const msg = JSON.stringify(command);
            const ok = ch.assertQueue(queueName, {durable: true});

            return ok.then(function(_qok) {
                ch.sendToQueue(queueName, Buffer.from(msg));
                return ch.close();
            });
        }).finally(function() { conn.close(); });
    }).catch(console.warn);
}

const consumeCommand = function(queueName: string, callback: (cmd: Command) => void) {
    const connection = amqp.connect(config.queueConnection.host);
    const channel = connection.then(conn => conn.createChannel());
    channel
    .then(ch => {
        ch.assertQueue(queueName);
        ch.consume(queueName, msg => {
            callback(JSON.parse(msg.content.toString()));
            ch.ackAll();
        }/*, {noAck: true}*/);
    });
}

export {queueCommand, consumeCommand}