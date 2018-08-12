// @flow

import type {CreateOrderCommand, OrderCreatedCommand} from '../common/types';
import createCommand from '../common/commandFactory';
import * as queue from '../common/queue';
import * as command from '../common/commands'

export function create(createOrderCommand: CreateOrderCommand): void {
    console.log(`Creating order ${createOrderCommand.id}`);

    // TODO create order

    const orderCreatedCommand: OrderCreatedCommand = createCommand(command.ORDER_CREATED, createOrderCommand); 
    queue.queueCommand(orderCreatedCommand);
};