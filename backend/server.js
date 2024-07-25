import express from 'express'
import 'dotenv/config'
import { MongoClient, ServerApiVersion } from 'mongodb'
const app = express()
const port = process.env.PORT
const databaseUri = process.env.DB_URI
const databaseName = process.env.DB_NAME
const collectionName = process.env.COLLECTION_NAME

// connect to DB
const client = new MongoClient(databaseUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
