import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { LoggerService } from "./logger/logger.service";

@Controller('/bora')
export class BorasController {

  constructor(
    private logger: LoggerService
  ) {}

  @Get('boras')
  borasHandler() {
    throw new Error("Unknown error mister!");
    return "Bora is way awesome!";
  }
}
