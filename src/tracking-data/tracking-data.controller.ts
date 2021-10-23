import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrackingDataService } from './tracking-data.service';
import { CreateTrackingDatumDto } from './dto/create-tracking-datum.dto';
import { UpdateTrackingDatumDto } from './dto/update-tracking-datum.dto';

@Controller('tracking-data')
export class TrackingDataController {
  constructor(private readonly trackingDataService: TrackingDataService) {}

  @Post()
  create(@Body() createTrackingDatumDto: CreateTrackingDatumDto) {
    return this.trackingDataService.create(createTrackingDatumDto);
  }

  @Get()
  findAll() {
    return this.trackingDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trackingDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrackingDatumDto: UpdateTrackingDatumDto) {
    return this.trackingDataService.update(+id, updateTrackingDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trackingDataService.remove(+id);
  }
}
