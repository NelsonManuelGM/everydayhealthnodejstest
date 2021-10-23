import { Injectable } from '@nestjs/common';
import { CreateTrackingDatumDto } from './dto/create-tracking-datum.dto';
import { UpdateTrackingDatumDto } from './dto/update-tracking-datum.dto';

@Injectable()
export class TrackingDataService {
  create(createTrackingDatumDto: CreateTrackingDatumDto) {
    return 'This action adds a new trackingDatum';
  }

  findAll() {
    return `This action returns all trackingData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trackingDatum`;
  }

  update(id: number, updateTrackingDatumDto: UpdateTrackingDatumDto) {
    return `This action updates a #${id} trackingDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} trackingDatum`;
  }
}
