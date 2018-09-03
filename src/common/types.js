// @flow
import * as command from './commands';
import * as status from './status';

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

export type Order = {
    _id: string,
    status: Status,
    items: Array<Item>
};

export type Command = {
    type: Commandtype, 
    orderId: string,
    items: Array<Item>
};

export type Items = {items: Array<Item>}; 

export type PurchaseAttemptCommand = Command & {type: command.PURCHASE_ATTEMPT}; 
export type CreateOrderCommand = Command & {type: command.CREATE_ORDER};
export type OrderCreatedCommand = Command & {type: command.ORDER_CREATED};
export type ReserveItemCommand = Command & {type: command.RESERVE_ITEM};
export type ItemReservedCommand = Command & {type: command.ITEM_RESERVED};

export type Status = 
    status.CREATED 
    | status.RESERVED 
    | status.PAID 
    | status.DELIVERED 
    | status.CANCELLED;