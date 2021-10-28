import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CsvModule } from 'nest-csv-parser';
import { TrackingDataController } from './controllers/tracking-data.controller';
import { TrackingDatum, TrackingDatumSchema } from './entities/tracking-datum.entity';
import { TrackingDataService } from './services/tracking-data.service';

@Module({
  controllers: [TrackingDataController],
  providers: [TrackingDataService],
  imports: [
    MongooseModule.forFeature([{ name: TrackingDatum.name, schema: TrackingDatumSchema }]),
    CsvModule
  ],
})
export class TrackingDataModule { }
