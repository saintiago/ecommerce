import {consumeCommand} from '../common/queue'
import * as command from "../common/commands";

consumeCommand(command.PURCHASE_ATTEMPT_COMMAND, msg => console.log('msg', msg));