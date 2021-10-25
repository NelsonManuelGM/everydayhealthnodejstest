import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CsvModule } from 'nest-csv-parser';
import { TrackingDataCommand } from 'src/tracking-data/command/tracking-data.command';
import { TrackingDataController } from './controllers/tracking-data.controller';
import { TrackingDatum, TrackingDatumSchema } from './entities/tracking-datum.entity';
import { PopulateTrackingDataService } from './services/populate-tracking-data.service';
import { TrackingDataService } from './services/tracking-data.service';

@Module({
  controllers: [TrackingDataController],
  providers: [TrackingDataService, PopulateTrackingDataService, TrackingDataCommand],
  imports: [
    MongooseModule.forFeature([{ name: TrackingDatum.name, schema: TrackingDatumSchema }]),
    CsvModule
  ],
})
export class TrackingDataModule { }
