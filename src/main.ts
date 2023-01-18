import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Set up Swagger
  console.log(process.env.MONGODB_URL);
  
  const config = new DocumentBuilder()
    .setTitle('How2meet')
    .setDescription('How2Meet API')
    .setVersion('1.0')
    .addTag('apis')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/swagger', app, document);
  
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

//For redeploy
