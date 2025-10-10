import { MongoClient } from "mongodb";
import fs from "fs";
import csv from "csv-parser";
import * as dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

async function importCSV() {
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection(process.env.COLLECTION_NAME);

    const results = [];

    fs.createReadStream(process.env.CSV_PATH)
      .pipe(csv())
      .on("data", (row) => {
        const doc = {
          name: row.name,
          borough: row.borough,
          cuisine: row.cuisine,
          restaurant_id: row.restaurant_id,
          address: {
            building: row.building,
            street: row.street,
            zipcode: row.zipcode,
            coord: [parseFloat(row.longitude), parseFloat(row.latitude)],
          },
          grades: [
            { date: new Date(row.grade_date1), score: parseInt(row.score1) },
            { date: new Date(row.grade_date2), score: parseInt(row.score2) },
          ].filter((g) => !isNaN(g.score)),
        };
        results.push(doc);
      })
      .on("end", async () => {
        if (results.length > 0) {
          await collection.insertMany(results);
          console.log(`✅ ${results.length} registros insertados correctamente`);
        } else {
          console.log("⚠️ No se detectaron registros válidos en el CSV.");
        }
        await client.close();
      });
  } catch (err) {
    console.error("❌ Error al importar CSV:", err);
  }
}

importCSV();
