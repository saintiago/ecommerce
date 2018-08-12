import * as command from '../common/commands';
import * as order from './order';
import { consumeCommand } from "../common/queue";

consumeCommand(command.CREATE_ORDER, order.create);