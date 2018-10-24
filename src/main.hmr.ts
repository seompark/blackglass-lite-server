import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLogger } from 'utils/logger.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new CustomLogger(),
  });

  const options = new DocumentBuilder()
  .setTitle('Blackglass Lite API')
  .setDescription('Blackglass Lite API documentation')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
