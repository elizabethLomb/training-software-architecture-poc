# Auth Service

This service provides authentication and user management for the architecture PoC. It is built with Node.js, Express, TypeScript, PostgreSQL (Supabase), and includes Swagger API documentation.

## 🚀 Features

- User registration and login endpoints
- Password hashing with bcrypt
- Role-based user model (supports multiple roles per user)
- PostgreSQL migrations for user table
- Logging with Winston and HTTP request logging with Morgan
- Swagger/OpenAPI documentation (auto-generated from JSDoc and available at `/api-docs`)
- Environment-based configuration

## 🛠️ Setup

### Prerequisite
- Node.js 20.x
- npm 10.x

### Install node dependencies
```npm install```

### Environment variables
Create a `.env` file in the root of the project and place the values like `sample.env`

### Migration
```npm run db:migrate```

## ✅ Run

### Development environment
```npm run start:dev```

## Health check
`GET /api/health`

## 🧪 Test
```npm run test```