import path from 'path';
import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';

const { combine, timestamp, label, prettyPrint, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `[${date.toDateString()} ${hour}:${minute}:${second}] [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'PH' }), timestamp(), prettyPrint(), myFormat),
  transports: [
    new transports.Console(),
    new transports.DailyRotateFile({
      filename: path.join(
        // eslint-disable-next-line no-undef
        process.cwd(),
        'logs',
        'winston',
        'success',
        'phu-%DATE%-success.log'
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

const errorlogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'PH' }), timestamp(), prettyPrint(), myFormat),
  transports: [
    new transports.Console(),
    new transports.DailyRotateFile({
      filename: path.join(
        // eslint-disable-next-line no-undef
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'phu-%DATE%-error.log'
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

export { logger, errorlogger };
