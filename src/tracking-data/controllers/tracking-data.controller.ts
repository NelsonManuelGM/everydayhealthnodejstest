import { Controller, Get, Param } from '@nestjs/common';
import { TrackingDataService } from '../services/tracking-data.service';

@Controller('tracking-data')
export class TrackingDataController {
  constructor(private readonly trackingDataService: TrackingDataService) { }

  @Get(':id')
  getNLSummary(@Param('id') newsletter_id: number) {
    return this.trackingDataService.getNLSummary(+newsletter_id)
  }
}
