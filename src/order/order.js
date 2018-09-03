// @flow

import type {
    CreateOrderCommand, 
    OrderCreatedCommand, 
    Order, 
    Status
    } from '../common/types';
import createCommand from '../common/commandFactory';
import * as queue from '../common/queue';
import * as command from '../common/commands';
import * as status from '../common/status';
import {setDocument} from '../common/db';
import {config} from '../common/config';

export function create(createOrderCommand: CreateOrderCommand): void {
    console.log(`Creating order ${createOrderCommand.orderId}`);

    saveOrder(createOrderCommand)
    .then(() => sendOrderCreatedCommand(createOrderCommand.orderId))
    // TODO Use Winston for logging
    .catch(err => console.log(err));
};

function saveOrder(createOrderCommand: CreateOrderCommand) {
    const order: Order = {
        _id: createOrderCommand.orderId,
        status: status.CREATED,
        items:  createOrderCommand.items
    };

    return setDocument(order, config.db.table.order);    
}

function sendOrderCreatedCommand(orderId: string) {
    const orderCreatedCommand: OrderCreatedCommand = createCommand(command.ORDER_CREATED, {orderId}); 
    queue.queueCommand(orderCreatedCommand);
}