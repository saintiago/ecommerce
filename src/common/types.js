// @flow
import * as command from './commands';

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export type Item = {
    size: Size,
    quantity: number
};

export type Commandtype = 
    command.PURCHASE_ATTEMPT 
    | command.CREATE_ORDER
    | command.ORDER_CREATED
    | command.RESERVE_ITEM
    | command.ITEM_RESERVED;

export type Command = {
    type: Commandtype,
    size: Size,
    quantity: number,
    id: string
};

export type PurchaseAttemptCommand = Command & {type: command.PURCHASE_ATTEMPT}; 
export type CreateOrderCommand = Command & {type: command.CREATE_ORDER};
export type OrderCreatedCommand = Command & {type: command.ORDER_CREATED};
export type ReserveItemCommand = Command & {type: command.RESERVE_ITEM};
export type ItemReservedCommand = Command & {type: command.ITEM_RESERVED};