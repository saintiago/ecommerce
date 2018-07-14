// @flow
import uniqid from 'uniqid'
import * as queue from '../common/queue'
import * as command from '../common/commands'
import createCommand from '../common/commandFactory'

function sendPurchaseAttempt(size: string, qty: number, id: string): void {
    const purchaseAttemptCommand = createCommand(command.PURCHASE_ATTEMPT_COMMAND, {size, qty, id}); 
    queue.queueCommand(purchaseAttemptCommand);
}

export default {
    requestPurchase(size: string, qty: number) {
        /*
        TODO 
        send purchase details to queue service
        figure out way to receive feedback 
        return promise with feedback

        Some query service before db?
        */

        sendPurchaseAttempt(size, qty, uniqid());
    }
};