// @flow

import {createLogger, format, transports} from 'winston';
const { combine, timestamp, printf } = format;

const oneLineFormat = printf(info => {
  return `${info.timestamp} [${info.level}]: ${info.message}`;
});

const infoLogger = createLogger({
    level: 'info',
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        oneLineFormat
    ),
    transports: [
        new transports.File({filename: 'log/info.log'})
    ]
});

const errorLogger = createLogger({
    level: 'error',
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        oneLineFormat
    ),
    transports: [
        new transports.File({filename: 'log/errors.log'})
    ]
});

export {infoLogger, errorLogger};