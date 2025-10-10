import { exec } from "child_process";
import * as dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const dbName = process.env.DB_NAME;
const backupPath = process.env.BACKUP_PATH || "./backup";

// Crea la carpeta si no existe
if (!fs.existsSync(backupPath)) {
  fs.mkdirSync(backupPath, { recursive: true });
}

const timestamp = new Date()
  .toISOString()
  .replace(/T/, "_")
  .replace(/:/g, "-")
  .split(".")[0]; // Ejemplo: 2025-10-09_20-47-00

const outputDir = `${backupPath}/${dbName}_dump_${timestamp}`;

const dumpCommand = `mongodump --db=${dbName} --out="${outputDir}"`;

console.log(`🚀 Ejecutando backup: ${dumpCommand}`);

exec(dumpCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error al crear el dump: ${error.message}`);
    return;
  }
  if (stderr) console.error(`⚠️ Advertencia: ${stderr}`);
  console.log(`✅ Dump completado exitosamente en: ${outputDir}`);
});
