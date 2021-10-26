import { Controller, Get, Param } from '@nestjs/common';
import { TrackingDataService } from '../services/tracking-data.service';

@Controller('tracking-data')
export class TrackingDataController {
  constructor(private readonly trackingDataService: TrackingDataService) { }

  @Get('/nlsummary/:id')
  getNLSummary(@Param('id') newsletter_id: number) {
    return this.trackingDataService.getNLSummary(+newsletter_id)
  }

  @Get('/usersummary/:id')
  getUserSummary(@Param('id') user_id: number) {
    return this.trackingDataService.getUserSummary(+user_id)
  }

  @Get('/nlactionsummary/:id')
  getNLActionSummary(@Param('id') newsletter_id: number) {
    return this.trackingDataService.getNLActionSummary(+newsletter_id)
  }
}
