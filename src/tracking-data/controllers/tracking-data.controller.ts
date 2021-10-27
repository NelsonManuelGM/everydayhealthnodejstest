import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NLSummarySchema } from '../dto/swagger.datatype.response';
import { TrackingDataService } from '../services/tracking-data.service';
import { NewLetterActionSummarySchema, UserSummarySchema } from './../dto/swagger.datatype.response';
@ApiTags('tracking-data')
@Controller('tracking-data')
export class TrackingDataController {
  constructor(private readonly trackingDataService: TrackingDataService) { }

  @ApiOperation({ summary: 'return count per day for the given newsletter_id' })
  @ApiResponse({
    status: 200,
    type: NLSummarySchema
  })
  @Get('/nlsummary/:newsletter_id')
  getNLSummary(@Param('newsletter_id') newsletter_id: number) {
    return this.trackingDataService.getNLSummary(+newsletter_id)
  }

  @ApiResponse({
    status: 200,
    type: UserSummarySchema
  })
  @ApiOperation({ summary: 'return count per day for the given user_id' })
  @Get('/usersummary/:user_id')
  getUserSummary(@Param('user_id') user_id: number) {
    return this.trackingDataService.getUserSummary(+user_id)
  }

  @ApiResponse({
    status: 200,
    type: NewLetterActionSummarySchema
  })
  @ApiOperation({ summary: 'daily open and click action counts for given newsletter_id' })
  @Get('/nlactionsummary/:newsletter_id')
  getNLActionSummary(@Param('newsletter_id') newsletter_id: number) {
    return this.trackingDataService.getNLActionSummary(+newsletter_id)
  }
}
