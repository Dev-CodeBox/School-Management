# Node.js School Management API

## 📌 Project Overview

This project implements a **School Management API** using **Node.js, Express.js, and MySQL**. It allows users to:

- **Add a new school** with details (name, address, latitude, longitude).
- **Retrieve a list of schools** sorted by proximity to a given location.

## 🚀 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL (hosted on Clever Cloud)
- **Deployment:** Render ([Live API](https://school-management-backend-608i.onrender.com/))

## 📂 Database Schema (MySQL)

Table: `schools`

| Column    | Type    | Constraints                  |
| --------- | ------- | ---------------------------- |
| id        | INT     | PRIMARY KEY, AUTO\_INCREMENT |
| name      | VARCHAR | NOT NULL                     |
| address   | VARCHAR | NOT NULL                     |
| latitude  | DECIMAL | NOT NULL                     |
| longitude | DECIMAL | NOT NULL                     |

## 🛠 Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone <repo-url>
cd <repo-folder>
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables (`.env` file)

Create a `.env` file in the root directory and configure:

```
PORT=<your-port>
DB_HOST=<your-mysql-host>
DB_USER=<your-mysql-username>
DB_PASS=<your-mysql-password>
DB_NAME=<your-database-name>
DB_PORT=<your-mysql-port>
```

### 4️⃣ Start the Server

```bash
npm run dev
```

## 📌 API Endpoints

### **1️⃣ Add School**

- **Endpoint:** `POST https://school-management-backend-608i.onrender.com/api/school/addSchool`
- **Request Body:**

```json
{
  "name": "St. Michael’s High School",
  "address": "Digha Ghat, Patna, Bihar",
  "latitude": 25.6283,
  "longitude": 85.0470
}
```

- **Response:**

```json
{
  "message": "School added successfully",
  "id": <inserted_school_id>
}
```

### **2️⃣ List Schools by Proximity**

- **Endpoint:** `GET https://school-management-backend-608i.onrender.com/api/school/listSchools?latitude=<user_latitude>&longitude=<user_longitude>`
- **Response:**

```json
[
  {
    "id": 2,
    "name": "Don Bosco Academy",
    "address": "Digha Ashiana Road, Patna, Bihar",
    "latitude": "25.612600",
    "longitude": "85.091800",
    "distance": 2.0530738860854756
  },
  {
    "id": 1,
    "name": "St. Michael’s High School",
    "address": "Digha Ghat, Patna, Bihar",
    "latitude": "25.628300",
    "longitude": "85.047000",
    "distance": 4.671483522645535
  },
  {
    "id": 3,
    "name": "DAV Public School",
    "address": "Khagaul Road, Patna, Bihar",
    "latitude": "25.591300",
    "longitude": "85.059600",
    "distance": 5.571487566677386
  }
]
```

## 🌍 Deployment

- **Hosted on:** [Render](https://school-management-backend-608i.onrender.com/)
- **Database:** MySQL (Clever Cloud)

## 👑 Postman Collection

[📌 Click here to access Postman Collection](postman-link)

## ✉️ Contact

**Developer:** Dev Raj Singh\
📧 Email: [dev.maildrop@gmail.com](mailto:dev.maildrop@gmail.com)
