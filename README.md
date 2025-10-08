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

---

## 🧱 Repository structure

```bash
restaurant-database/
│
├── backup/
│   └── restaurant/               # MongoDB dump (collections and indexes)
│
├── data/
│   ├── restaurants.csv           # CSV file with restaurant data
│   
│
├── scripts/
│                                 # Script to import users
│
├── screenshots/
│   ├── mongo_collections.png     # Screenshot showing collections in MongoDB
│   ├── mongo_indexes.png         # Screenshot of created indexes
│   └── mongo_data_preview.png    # Screenshot of data preview
│
├── schema/
│   └── restaurant_schema.json   # JSON structure defining the data schema
│
└── README.md                     # Project documentation