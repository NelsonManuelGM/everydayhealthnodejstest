import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrackingDatum } from '../entities/tracking-datum.entity';

@Injectable()
export class TrackingDataService {
  constructor(@InjectModel(TrackingDatum.name) private trackingData: Model<TrackingDatum>) { }

  async getNLSummary(newsletter_id: number) {
    const data = await this.trackingData.aggregate(
      [
        {
          '$match': {
            'newsletter_id': newsletter_id
          }
        }, {
          '$group': {
            '_id': {
              '$dateToString': {
                'format': '%Y-%m-%d',
                'date': '$activity_date'
              }
            },
            'count': {
              '$count': {}
            }
          }
        }, {
          '$sort': {
            '_id': 1
          }
        }
      ]
    )

    return { newsletter_id: newsletter_id, summary: data }
  }

  async getUserSummary(user_id: number) {
    const data = await this.trackingData.aggregate(
      [
        {
          '$match': {
            'user_id': user_id
          }
        }, {
          '$group': {
            '_id': {
              '$dateToString': {
                'format': '%Y-%m-%d',
                'date': '$activity_date'
              }
            },
            'count': {
              '$count': {}
            }
          }
        }, {
          '$sort': {
            '_id': 1
          }
        }
      ]
    )
    return { user_id: user_id, summary: data }
  }

  async getNLActionSummary(newsletter_id: number) {
    const action = 'open'
    const data = await this.trackingData.aggregate(
      [
        {
          '$match': {
            'newsletter_id': newsletter_id,
            'action': action
          }
        }, {
          '$group': {
            '_id': {
              '$dateToString': {
                'format': '%Y-%m-%d',
                'date': '$activity_date'
              }
            },
            'count': {
              '$count': {}
            }
          }
        }, {
          '$sort': {
            '_id': 1
          }
        }
      ]
    )
    return { newsletter_id: newsletter_id, action: action, summary: data }
  }
}
