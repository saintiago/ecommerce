// @flow

import type {PurchaseAttemptCommand, OrderCreatedCommand} from '../common/types'
import * as queue from '../common/queue'
import * as command from '../common/commands'
import createCommand from '../common/commandFactory'
import {infoLogger} from '../common/logger'

export function onPurchaseAttempt(purchaseAttempt: PurchaseAttemptCommand): void {
    infoLogger.info('[domain] Purchase attempt: ' + JSON.stringify(purchaseAttempt));
    const createOrderCommand = createCommand(command.CREATE_ORDER, purchaseAttempt); 
    queue.queueCommand(createOrderCommand);
}

export function onOrderCreated(orderCreatedCommand: OrderCreatedCommand): void {
    infoLogger.info('[domain] Order created: ' + JSON.stringify(orderCreatedCommand));
    const reserveItemCommand = createCommand(command.RESERVE_ITEM, orderCreatedCommand);
    queue.queueCommand(reserveItemCommand);
}