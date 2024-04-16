/**
 *
 *  This is used to get the gallery items
 *
 */

import { MongoClient } from "mongodb";

let client;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(process.env.GALLERY_DB_CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
  }
  return client
    .db(process.env.GALLERY_DB_NAME)
    .collection(process.env.GALLERY_DB_COLLECTION_NAME);
}

export default async function handler(req, res) {}
