// @flow
import * as command from "./commands";
import type {Command, CommandType} from './types'

export default function createCommand (commandType: string, props: Object) {
    switch (commandType) {
        case command.PURCHASE_ATTEMPT_COMMAND:
            return {
                type: command.PURCHASE_ATTEMPT_COMMAND,
                ...props
            }
        default:
            throw new Error('Unknown command');
    }
}