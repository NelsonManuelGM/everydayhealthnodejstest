import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrackingDataService } from '../services/tracking-data.service';
import { CreateTrackingDatumDto } from '../dto/create-tracking-datum.dto';
import { UpdateTrackingDatumDto } from '../dto/update-tracking-datum.dto';

@Controller('tracking-data')
export class TrackingDataController {
  constructor(private readonly trackingDataService: TrackingDataService) {}

  @Get(':id')
  getNLSummary(@Param('id') newsletter_id: number){
    this.trackingDataService.getNLSummary(+newsletter_id)
  }
}
