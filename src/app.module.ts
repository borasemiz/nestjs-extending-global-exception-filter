import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BorasController } from './boras.controller';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [LoggerModule],
  controllers: [AppController, BorasController],
  providers: [AppService],
})
export class AppModule {}
