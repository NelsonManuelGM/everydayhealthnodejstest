import * as fs from "fs";
import { CsvParser } from "nest-csv-parser";

const DATA_PATH = './src/data/user_nl_tracking_data.csv'


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
/**
 * return the .csv data already processed
 * @returns {Array<EntityData>} CSV info
 */
export async function dataReader() {
  const data = await collectData()
  console.log('data %o', data)
  return data
}

/**
 * Read the .csv file
 * @returns 
 */
async function collectData() {
  const csvParser = new CsvParser()
  const stream = fs.createReadStream(process.env.DATA_PATH || DATA_PATH, { flags: 'r' })

  const csvData = await csvParser.parse(stream, Entity)

  const dataToBulk = await cleanDataToQuery(csvData.list)

  return dataToBulk
}

/**
 * 
 * @param csvData {Array<any>}
 * @returns  wrapped data ready to bulk {Array<any>}
 */
async function cleanDataToQuery(csvData: Array<any>): Promise<Array<any>> {
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