import { Module } from '@nestjs/common';
import { ConfigurationModule } from './configuration/configuration.module';
import { TrackingDataModule } from './tracking-data/tracking-data.module';

@Module({
  imports: [ConfigurationModule, TrackingDataModule],
  providers: [],
})
export class AppModule { }
