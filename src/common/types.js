// @flow
import * as command from './commands'

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export type CommandType = {
    type: command.PURCHASE_ATTEMPT_COMMAND
};

export type PurchaseAttemptCommand = CommandType & {
    size: Size,
    quantity: number,
    id: string
}

export type Command = PurchaseAttemptCommand;