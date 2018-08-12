// @flow
import uniqid from 'uniqid'
import * as queue from '../common/queue'
import * as command from '../common/commands'
import createCommand from '../common/commandFactory'

function sendPurchaseAttempt(size: string, qty: number, id: string): void {
    const purchaseAttemptCommand = createCommand(command.PURCHASE_ATTEMPT, {size, qty, id}); 
    queue.queueCommand(purchaseAttemptCommand);
}

export default {
    requestPurchase(size: string, qty: number) {
        sendPurchaseAttempt(size, qty, uniqid());
    }
};