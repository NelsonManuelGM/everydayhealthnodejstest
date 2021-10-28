import { ConfigModule } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MongoClient } from 'mongodb';

/**
 * Create mongodb connection
 * @returns DB connection
 */
export async function getDb() {
  await NestFactory.createApplicationContext(ConfigModule.forRoot({}));
  const DB_URI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin&directConnection=true&ssl=false`

  const client = await MongoClient.connect(DB_URI);
  return client.db();
}