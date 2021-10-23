import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

//TODO add mongoose configuration
//TODO add Command configuration
@Module({
  imports: [
    ConfigModule.forRoot({}),
  ],
  controllers: [],
  providers: [],
})
export class ConfigurationModule { }
