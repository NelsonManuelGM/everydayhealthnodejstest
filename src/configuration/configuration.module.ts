import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

//TODO add mongoose configuration
//TODO add Command configuration
@Module({
  imports: [
    ConfigModule.forRoot({}),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
      })
    })
  ],
  controllers: [],
  providers: [],
})
export class ConfigurationModule { }
