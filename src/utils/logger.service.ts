import { LoggerService } from '@nestjs/common';
import { createLogger, format, transports, LogEntry } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.printf(info =>
          `${info.timestamp} [${info.label || 'default'}] ${info.level}: ${info.message}`),
      ),
    }),
  ],
});

if (process.env.NODE_ENV === 'production') {
  logger.add(new transports.File({ filename: 'log/error.log', level: 'error' }));
  logger.add(new transports.File({ filename: 'log/combined.log' }));
}

export class CustomLogger implements LoggerService {
  log(message: string) {
    logger.log({
      message,
      level: 'info',
    });
  }

  info(...message: string[]) {
    logger.info(message);
  }

  error(...message: string[]) {
    logger.error(message);
  }

  warn(...message: string[]) {
    logger.warn(message);
  }
}
