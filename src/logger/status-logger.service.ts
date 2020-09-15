import { LoggerService } from "@nestjs/common";

export class StatusLoggerService implements LoggerService {

  log(message: any, context?: string) {
    console.log(`[INFO] ${context} | ${message}`);
  }
  error(message: any, trace?: string, context?: string) {
    console.log(`[ERROR] ${context} | ${message}`);
  }
  warn(message: any, context?: string) {
    console.log(`[WARN] ${context} | ${message}`);
  }
  debug?(message: any, context?: string) {
    console.log(`[DEBUG] ${context} | ${message}`);
  }
  verbose?(message: any, context?: string) {
    console.log(`[VERBOSE] ${context} | ${message}`);
  }
}