import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default function swaggerConfig(app: INestApplication){
    const config = new DocumentBuilder()
    .setTitle('Everyday Health')
    .build();
    
    const document = SwaggerModule.createDocument(app, config);
    
    SwaggerModule.setup('/', app, document);
}
