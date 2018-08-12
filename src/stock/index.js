import * as command from '../common/commands';
import * as stock from './stock';
import { consumeCommand } from "../common/queue";

consumeCommand(command.RESERVE_ITEM, stock.reserve);