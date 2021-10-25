import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as fs from 'fs';
import { Model } from 'mongoose';
import { CsvParser } from 'nest-csv-parser';
import { TrackingDatum } from '../entities/tracking-datum.entity';


interface EntityData {
    user_id?: number;
    newsletter_id?: number;
    action?: string;
    activity_date?: Date;
}

class Entity implements EntityData {
    user_id: number;
    newsletter_id: number;
    action: string;
    activity_date: Date;
}

@Injectable()
export class PopulateTrackingDataService {
    constructor(
        @InjectModel(TrackingDatum.name) private trackingData: Model<TrackingDatum>,
        private readonly csvParser: CsvParser
    ) { }

    //TODO finish BULK
    async populate() {
        const data = await this.collectData(this.csvParser)
        console.log('data %o', data)
        // this.trackingData.bulkWrite(data)
    }


    private async collectData(csvParser: CsvParser) {
        const stream = fs.createReadStream(process.env.DATA_PATH, { flags: 'r' })

        const csvData = await csvParser.parse(stream, Entity)

        const dataToBulk = await this.cleanDataToQuery(csvData.list)

        return dataToBulk
    }

    private async cleanDataToQuery(csvData: Array<any>) {
        const data = []
        const query = doc => ({
            insertOne: {
                "document": doc
            }
        })

        csvData.forEach(item => {
            const obj: EntityData = {};
            const values = String(Object.values(item)[0]).split(',')
            obj.user_id = +values[0]
            obj.newsletter_id = +values[1]
            obj.action = values[2]
            obj.activity_date = new Date(values[3])

            data.push(query(obj))
        })

        return data
    }
}
