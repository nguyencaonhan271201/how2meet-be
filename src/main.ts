import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Set up Swagger
  const config = new DocumentBuilder()
    .setTitle('How2meet')
    .setDescription('How2Meet API')
    .setVersion('1.0')
    .addTag('apis')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/swagger', app, document);
  //Connect MongoDB

  await app.listen(3000);
}
bootstrap();
