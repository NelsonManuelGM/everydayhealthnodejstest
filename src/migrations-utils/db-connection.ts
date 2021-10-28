import { MongoClient } from 'mongodb';

const DB_URI = 'mongodb://everydayhealth:everydayhealth@localhost:27017/everydayhealth?authSource=admin&directConnection=true&ssl=false'

/**
 * Create mongodb connection
 * @returns DB connection
 */
export const getDb = async () => {
  const client = await MongoClient.connect(DB_URI);
  return client.db();
};