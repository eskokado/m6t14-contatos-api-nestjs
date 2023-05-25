import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Poc de API de cadastro de cliente com contatos')
    .setDescription(
      'Neste POC, desenvolvemos uma API de cadastro de clientes com contatos usando MySQL, ' +
        'Node.js, NestJS e Swagger. ' +
        'Utilizamos o Docker Compose para configurar o ambiente de desenvolvimento. ' +
        'O NestJS forneceu uma estrutura escalável, e o Swagger ajudou na documentação e teste da API. ' +
        'Implementamos validações de entrada, autenticação e autorização. ' +
        'O POC foi concluído com sucesso, demonstrando a viabilidade da solução.',
    )
    .setContact(
      'Edson Shideki Kokado',
      'https://github.com/eskokado/m6t14-contatos-api-nestjs',
      'eskokado@gmail.com',
    )
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDoc);

  await app.listen(3000);
}
bootstrap();
