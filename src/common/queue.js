// @flow
'use strict';

import * as amqp from 'amqplib'
import {config} from './config'
import type {Command, CommandType} from './types'

const ready = amqp.connect(config.queueConnection.host)
.then(conn => conn.createChannel());

const queueCommand = function(command: Command) {
    const queueName = command.type;
    ready
    .then(ch => {
        return ch.assertQueue(queueName)
            && ch.sendToQueue(queueName, Buffer.from(JSON.stringify(command)));
    })
    .then(
        res => {
            if (res) {
                console.log(`Command ${JSON.stringify(command)} added to queue ${queueName}`);
            } else {
                console.error(`Error queueing command ${JSON.stringify(command)} to queue ${queueName}`)
            }
            return res;
        }
    )
    .catch(err => console.error(err.message));
}

const consumeCommand = function(queueName: string, callback: (string) => void) {
    ready
    .then(ch => {
        ch.assertQueue(queueName);
        ch.consume(queueName, msg => callback(JSON.parse(msg.content.toString())), {noAck: true});
    });
}

export {queueCommand, consumeCommand}