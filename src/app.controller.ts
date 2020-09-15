import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Get()
  getHello(): string {
    throw new Error("Ipneligine degilmi a.q");
    return this.appService.getHello();
  }

  @Get('boras')
  getBoras(): string {
    return 'Bora is awesome!';
  }
}
