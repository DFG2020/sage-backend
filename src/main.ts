import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    // Creates a global pipeline to validate requests.
    app.useGlobalPipes(new ValidationPipe());

    // Prefixes all endpoints with /api/
    app.setGlobalPrefix("api");

    // Setup Swagger.
    const options = new DocumentBuilder()
      .setTitle('Sage API')
      .setDescription('The fact that you are seeing this is shocking to me.')
      .setVersion('0.0.1')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('doc', app, document);

    // Run the application.
    const port = parseInt(process.env.APP_PORT, 10) || 3000;
    await app.listen(port);
}

bootstrap();
