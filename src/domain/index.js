// @flow

import {consumeCommand} from '../common/queue'
import * as command from '../common/commands'
import * as commandResponse from './commandResponse'
import {infoLogger} from '../common/logger'

infoLogger.info('[domain] Starting service.');

consumeCommand(command.PURCHASE_ATTEMPT, commandResponse.onPurchaseAttempt); // create order
consumeCommand(command.ORDER_CREATED, commandResponse.onOrderCreated); // reserve item

/*consumeCommand(command.ITEM_RESERVED, msg => console.log('msg', msg)); // request payment
consumeCommand(command.ITEM_OUT_OF_STOCK, msg => console.log('msg', msg)); // nullify order

consumeCommand(command.PAYMENT_CONFIRMED, msg => console.log('msg', msg)); // deliver order
consumeCommand(command.PAYMENT_DECLINED, msg => console.log('msg', msg)); // nullify order, release item

consumeCommand(command.ORDER_DELIVERED, msg => console.log('msg', msg)); // update statistics
consumeCommand(command.ORDER_NOT_DELIVERED, msg => console.log('msg', msg)); // return money*/

// Create order, reserve item, in stock, request payment, confirm payment, deliver item, update statistics
// Create order, reserve item, in stock, request payment, not paid, nullify order, release item
// Create order, reserve item, out of stock, nullify order