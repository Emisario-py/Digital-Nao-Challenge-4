# 🍽️ Tattler — MongoDB Restaurant Directory

## 📖 Description
**Tattler** is a restaurant directory database designed to store and manage restaurant information efficiently using **MongoDB**, a non-relational database that handles data in **JSON-like documents**.  
This repository contains the **database configuration and setup** phase of the project. It includes the MongoDB dump, CSV import scripts, and documentation to easily restore or modify the database.

The database aims to support a future RESTful API that will allow searching, filtering, rating, and commenting on restaurants through a web service built with **Express.js**.

---

## ⚙️ Installation and Usage Instructions

### 1️⃣ Prerequisites
Before starting, make sure you have installed:
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [MongoDB Database Tools](https://www.mongodb.com/try/download/database-tools) *(for `mongoimport` and `mongorestore`)*
- [Git](https://git-scm.com/)

---

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/your_user/Digital-Nao-Challenge-4.git
```

### 3️⃣ Install dependencies
```bash
cd restaurant-database
npm install
```

In this directory you can use the next scripts to do actions with the database.

---
## 🧩 MongoDB Automation Scripts

| **Command**          | **Description**                                                                                           | **Expected Result**                                                                        |
| -------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 🏗️ `npm run setup`  | Creates and initializes the entire MongoDB database, including schema, data import, and index generation. | The `restaurants` collection is created, populated, and indexed successfully.              |
| 🧱 `npm run schema`  | Builds the database collection with JSON Schema validation rules to ensure data integrity.                | The `restaurants` collection is created with validation constraints.                       |
| 📥 `npm run import`  | Imports data from the CSV file and transforms it into structured MongoDB documents.                       | Records from `data/restaurants.csv` are successfully imported according to the schema.     |
| 🧭 `npm run indexes` | Creates optimized indexes for faster query performance, including text, compound, and geospatial indexes. | Indexes are created on key fields (`name`, `borough`, `cuisine`, `address.coord`, etc.).   |
| 💾 `npm run dump`    | Generates a full database backup (dump) and saves it in a timestamped folder.                             | A backup folder is created inside `/backup` containing `.bson` and `.metadata.json` files. |
---

## 🧱 Repository structure

```bash
restaurant-database/
│
├── backup/
│   └── restaurant/
│
├── data/
│   └── restaurants.csv
│   
│
├── scripts/
│  ├── backupDB.js 
│  ├── createIndexes.js
│  ├── createSchema.js
│  └── importData.js
│
├── screenshots/
│   ├── database_and_collection.png
│   ├── mongo_documents.png
│   └── mongo_indexes.png
│
├── .env
│
│
├── .gitignore
│
│
├── package-lock.json
│
│
└── package.json

README.md
```

