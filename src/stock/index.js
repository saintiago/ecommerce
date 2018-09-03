import * as command from '../common/commands';
import * as stock from './stock';
import { consumeCommand } from "../common/queue";
import {infoLogger} from '../common/logger';

infoLogger.info('Starting stock service.');

consumeCommand(command.RESERVE_ITEM, stock.reserve);