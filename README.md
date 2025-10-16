# 🍽️ MongoDB Restaurant Directory

## 📖 Description
**Tattler** is a restaurant directory database designed to store and manage restaurant information efficiently using **MongoDB**, a non-relational database that handles data in **JSON-like documents**.  
This repository contains the **database configuration and setup** phase of the project. It includes the MongoDB dump, CSV import scripts, and documentation to easily restore or modify the database.

The database supports a RESTful API that enables users to search and filter on restaurants through a web service built with Express.js. Setup instructions are provided in this document.

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

After creating the database we can run our Api by running the next commands

## 🚚 How to run the api

First we need to located in the directory of the api and install the dependencies:

```cmd
cd express-mongo-api

npm install
```
To run the server we run the command:

```cmd
npm run dev
```

---

If you use postman you can create the coleccion of request to test the api by saving this json in a .json file and importing it in postman:

```json
{
	"info": {
		"_postman_id": "fa421ba2-8c3b-4032-9801-e367cf643c94",
		"name": "Restaurant API (MongoDB + Express)",
		"description": "Postman collection for testing CRUD operations on the Restaurants API using Express.js and MongoDB.",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "44553130"
	},
	"item": [
		{
			"name": "Get All Restaurants",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/restaurants?page=1&limit=5",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"restaurants"
					],
					"query": [
						{
							"key": "page",
							"value": "1"
						},
						{
							"key": "limit",
							"value": "5"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete Restaurant",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/restaurants/{{restaurant_id}}",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"restaurants",
						"{{restaurant_id}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create Restaurant",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"name\": \"Brunos On The Boulevard\",\n    \"borough\": \"Queens\",\n    \"cuisine\": \"American\",\n    \"restaurant_id\": \"40356151\",\n    \"address\": {\n        \"building\": \"8825\",\n        \"street\": \"Astoria Boulevard\",\n        \"zipcode\": \"11369\",\n        \"coord\": [-73.8803827, 40.7643124]\n    },\n    \"grades\": [\n        { \"date\": \"2014-11-15T00:00:00.000Z\", \"score\": 4 },\n        { \"date\": \"2014-05-02T00:00:00.000Z\", \"score\": 2 }\n    ],\n    \"comments\": [\n        {\n            \"date\": \"2014-11-15T00:00:00.000Z\",\n            \"comment\": \"I will definitely be back!\"\n        }\n    ]\n}"
				},
				"url": {
					"raw": "http://localhost:3000/api/restaurants",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"restaurants"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Restaurant by ID",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/restaurants/{{restaurant_id}}",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"restaurants",
						"{{restaurant_id}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update Restaurant (PUT)",
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"name\": \"Brunos Updated\",\n    \"borough\": \"Queens\",\n    \"cuisine\": \"American\",\n    \"restaurant_id\": \"40356151\",\n    \"address\": {\n        \"building\": \"8825\",\n        \"street\": \"Astoria Boulevard\",\n        \"zipcode\": \"11369\",\n        \"coord\": [-73.8803827, 40.7643124]\n    },\n    \"grades\": [\n        { \"date\": \"2014-11-15T00:00:00.000Z\", \"score\": 4 }\n    ],\n    \"comments\": [\n        {\n            \"date\": \"2014-11-15T00:00:00.000Z\",\n            \"comment\": \"Updated comment\"\n        }\n    ]\n}"
				},
				"url": {
					"raw": "http://localhost:3000/api/restaurants/{{restaurant_id}}",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"restaurants",
						"{{restaurant_id}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Search Restaurants by Borough & Cuisine",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/restaurants?borough=Queens&cuisine=American",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"restaurants"
					],
					"query": [
						{
							"key": "borough",
							"value": "Queens"
						},
						{
							"key": "cuisine",
							"value": "American"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Restaurants by cuisine",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "Get Restaurants by raiting",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		}
	],
	"variable": [
		{
			"key": "restaurant_id",
			"value": "40356151"
		}
	]
}

```

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

express-mongo-api/
├── src/
│   ├── app.js
│   ├── db.js
│   ├── routes/
│   │   └── restaurants.routes.js
│   ├── controllers/
│   │   └── restaurants.controller.js
│   ├── validators/
│   │   └── restaurant.schema.js
│   ├── middlewares/
│   │   ├── validate.js
│   │   └── error.js
│   └── utils/
│       └── asyncHandler.js
├── .env
│  
├── .gitignore
│  
└── package.json

README.md
```
---
### Version 1.1.0
