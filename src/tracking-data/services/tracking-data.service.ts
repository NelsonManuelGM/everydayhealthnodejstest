import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrackingDatum } from '../entities/tracking-datum.entity';

@Injectable()
export class TrackingDataService {
  constructor(@InjectModel(TrackingDatum.name) private trackingData: Model<TrackingDatum> ){}
  

  getNLSummary(newsletter_id: number){
    return newsletter_id
  }
}
