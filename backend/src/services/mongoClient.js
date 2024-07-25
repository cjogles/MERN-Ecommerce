import { MongoClient, ServerApiVersion } from 'mongodb'
const databaseUri = process.env.DB_URI
const databaseName = process.env.DB_NAME
const collectionName = process.env.COLLECTION_NAME

const client = new MongoClient(databaseUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default client