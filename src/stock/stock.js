// @flow

import type {ReserveItemCommand, ItemReservedCommand} from '../common/types';
import createCommand from '../common/commandFactory';
import * as queue from '../common/queue';
import * as command from '../common/commands'

export function reserve(reserveItemCommand: ReserveItemCommand): void {
    console.log(`Reserving item ${JSON.stringify(reserveItemCommand)}`);

    // TODO reserve item

    const itemReservedCommand: ItemReservedCommand = createCommand(command.ITEM_RESERVED, reserveItemCommand); 
    queue.queueCommand(itemReservedCommand);
};