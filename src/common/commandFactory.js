// @flow
import * as command from "./commands";
import type {Command} from './types'
import uniqid from 'uniqid'

export default function createCommand (commandType: string, props: Object): Command {

    if (!Object.values(command).includes(commandType)) {
        throw new Error(`Unknown command ${commandType}`);
    }

    return {
        ...props,
        type: commandType
    }
}