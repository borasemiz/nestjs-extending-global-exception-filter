import { Module } from "@nestjs/common";
import { StatusLoggerService } from "./status-logger.service";
import { LoggerService } from "./logger.service";

const providers = [
  StatusLoggerService,
  LoggerService
];

@Module({
  providers: [ ...providers ],
  exports: [ ...providers ]
})
export class LoggerModule {}
