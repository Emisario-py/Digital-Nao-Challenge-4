import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

async function createSchema() {
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const collectionName = process.env.COLLECTION_NAME;

    const schema = {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "borough", "cuisine", "address"],
        properties: {
          name: { bsonType: "string" },
          borough: { bsonType: "string" },
          cuisine: { bsonType: "string" },
          restaurant_id: { bsonType: "string" },
          address: {
            bsonType: "object",
            required: ["building", "street", "zipcode", "coord"],
            properties: {
              building: { bsonType: "string" },
              street: { bsonType: "string" },
              zipcode: { bsonType: "string" },
              coord: {
                bsonType: "array",
                items: [{ bsonType: "double" }, { bsonType: "double" }],
                description: "Debe contener [longitud, latitud]",
              },
            },
          },
          grades: {
            bsonType: "array",
            items: {
              bsonType: "object",
              required: ["date", "score"],
              properties: {
                date: { bsonType: "date" },
                score: { bsonType: "int" },
              },
            },
          },
          comments: {
            bsonType: "array",
            items: {
              bsonType: "object",
              required: ["date", "comment"],
              properties: {
                date: { bsonType: "date" },
                comment: { bsonType: "string" },
              },
            },
          },
        },
      },
    };

    await db.createCollection(collectionName, { validator: schema });
    console.log(`✅ Colección "${collectionName}" creada con validación`);
  } catch (err) {
    if (err.codeName === "NamespaceExists") {
      console.log("⚠️ La colección ya existe, omitiendo creación.");
    } else {
      console.error("❌ Error creando colección:", err);
    }
  } finally {
    await client.close();
  }
}

createSchema();
