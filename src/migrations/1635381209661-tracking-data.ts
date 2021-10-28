import { getDb } from '../migrations-utils/db-connection';
import { dataReader } from '../migrations-utils/populate-function';

const DB_NAME = 'trackingdata'

/**
 * Create migration to populate mongodb database
 */
module.exports.up = async function () {
  const data = await dataReader()
  const db = await getDb()
  const collection = await db.createCollection(DB_NAME)
  collection.bulkWrite(data)
}
