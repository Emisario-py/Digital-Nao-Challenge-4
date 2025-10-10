// scripts/createIndexes.js
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

async function createIndexes() {
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection(process.env.COLLECTION_NAME);

    console.log("⚙️ Creando índices para la colección:", process.env.COLLECTION_NAME);

    // 1️⃣ Índice para búsquedas por nombre (texto)
    await collection.createIndex({ name: "text" });
    console.log("✅ Índice de texto en 'name' creado");

    // 2️⃣ Índice para filtrar por borough
    await collection.createIndex({ borough: 1 });
    console.log("✅ Índice en 'borough' creado");

    // 3️⃣ Índice para filtrar por tipo de cocina
    await collection.createIndex({ cuisine: 1 });
    console.log("✅ Índice en 'cuisine' creado");

    // 4️⃣ Índice compuesto: borough + cuisine
    await collection.createIndex({ borough: 1, cuisine: 1 });
    console.log("✅ Índice compuesto en 'borough + cuisine' creado");

    // 5️⃣ Índice geoespacial para búsquedas por ubicación (address.coord)
    await collection.createIndex({ "address.coord": "2dsphere" });
    console.log("✅ Índice geoespacial en 'address.coord' creado");

    // 6️⃣ Índice único en restaurant_id (siempre que todos tengan valor)
    await collection.createIndex({ restaurant_id: 1 }, { unique: true, sparse: true });
    console.log("✅ Índice único en 'restaurant_id' creado");

    console.log("🎉 Todos los índices se han creado exitosamente.");
  } catch (err) {
    console.error("❌ Error creando índices:", err);
  } finally {
    await client.close();
  }
}

createIndexes();
