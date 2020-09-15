import { ArgumentsHost, Catch } from '@nestjs/common';
import { NestFactory, BaseExceptionFilter as F } from '@nestjs/core';
import { AppModule } from './app.module';
import { BaseExceptionFilter } from './exception.filter';
import { StatusLoggerService } from './logger/status-logger.service';

@Catch()
class MaExceptionFilter extends F {
  catch(exception: any, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new StatusLoggerService()
  });
  app.useGlobalFilters(new MaExceptionFilter());
  await app.listen(3000);
}
bootstrap();
