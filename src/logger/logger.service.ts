import { Inject, Injectable, Req, Scope } from "@nestjs/common";
import { ContextIdFactory, REQUEST } from "@nestjs/core";
import { Request } from "express";

@Injectable({ scope: Scope.REQUEST })
export class LoggerService {

  constructor(
    @Inject(REQUEST) private request: Request
  ) {}

  log(message: string) {
    console.log(`${this.request.originalUrl} | ${message}`);
  }

  error(message: string) {
    console.log(`${this.request.originalUrl} | ${message}`);
  }
}
