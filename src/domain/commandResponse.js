// @flow

import type {PurchaseAttemptCommand, OrderCreatedCommand} from '../common/types'
import * as queue from '../common/queue'
import * as command from '../common/commands'
import createCommand from '../common/commandFactory'

export function onPurchaseAttempt(purchaseAttempt: PurchaseAttemptCommand): void {
    console.log('purchaseAttempt', purchaseAttempt);
    const createOrderCommand = createCommand(command.CREATE_ORDER, purchaseAttempt); 
    queue.queueCommand(createOrderCommand);
}

export function onOrderCreated(orderCreatedCommand: OrderCreatedCommand): void {
    console.log('orderCreatedCommand', orderCreatedCommand);
    const reserveItemCommand = createCommand(command.RESERVE_ITEM, orderCreatedCommand);
    queue.queueCommand(reserveItemCommand);
}