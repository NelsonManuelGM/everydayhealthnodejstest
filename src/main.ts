import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerConfig from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  swaggerConfig(app)

  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
