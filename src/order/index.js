import * as command from '../common/commands';
import * as order from './order';
import { consumeCommand } from "../common/queue";
import {infoLogger} from '../common/logger'

infoLogger.info('[order] Starting service.');

consumeCommand(command.CREATE_ORDER, order.create);