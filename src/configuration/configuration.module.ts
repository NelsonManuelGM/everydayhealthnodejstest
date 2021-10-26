import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandModule } from 'nestjs-command';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb://${process.env.DB_HOST}`,
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        autoCreate: true,
      })
    }),
    CommandModule
  ],
  controllers: [],
  providers: [],
})
export class ConfigurationModule { }
