// @flow
import uniqid from 'uniqid'
import * as queue from '../common/queue'
import * as command from '../common/commands'
import createCommand from '../common/commandFactory'

function sendPurchaseAttempt(size: string, qty: number, orderId: string): void {
    const purchaseAttemptCommand = createCommand(command.PURCHASE_ATTEMPT, {orderId, items: [{size, qty}]}); 
    queue.queueCommand(purchaseAttemptCommand);
}

export default {
    requestPurchase(size: string, qty: number) {
        sendPurchaseAttempt(size, qty, uniqid());
    }
};