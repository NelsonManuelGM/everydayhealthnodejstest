import { Module } from '@nestjs/common';
import { TrackingDataService } from './tracking-data.service';
import { TrackingDataController } from './tracking-data.controller';

@Module({
  controllers: [TrackingDataController],
  providers: [TrackingDataService]
})
export class TrackingDataModule {}
