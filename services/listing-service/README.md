
# Listing Service

The Listing Service is responsible for managing all operations related to listings, including processing, handling, and maintaining listing data in the database. It provides endpoints and business logic for creating, updating, retrieving, and deleting listings within the platform.

## 🚀 Features

- Environment-based configuration
- Health check endpoint

## 🛠️ Setup

### Prerequisites
- Node.js 20.x
- npm 10.x

### Install node dependencies
```npm install```

### Environment variables
Create a `.env` file in the root of the project and add the variables as shown in `sample.env`.

## ✅ Run

### Development environment
```npm run start:dev```

## Health check
`GET /api/health`

## 🧪 Test
```npm run test```