const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
let db;

async function connectDB() {
  await client.connect();
  db = client.db(process.env.DB_NAME);
  console.log(`✅ Connected to MongoDB database: ${process.env.DB_NAME}`);
}

function getCollection() {
  return db.collection("restaurants");
}

module.exports = { connectDB, getCollection };
