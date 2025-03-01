# Training Software Architecture PoC
Full-stack architecture using Next.js, Node.js, and versioned APIs.

This monorepo showcases a scalable software architecture with:

* 🖥️ Next.js Web App for the frontend.
* 🔐 Auth Service - User authentication & JWT-based security.
* 🏠 Listing Service - Manages property listings.
* 📅 Booking Service - Handles reservations.
* 💳 Payment Service - Secure transaction processing with Stripe/PayPal.
* ⭐ Review Service - Manages user reviews & ratings.
* 📩 Notification Service - Sends emails, SMS, and push notifications.
* 🔍 Search Service - Property search, filters, and recommendations.
* 📖 API Docs - Swagger-based API documentation.
* 📦 Shared Libraries for configs, utilities, and TypeScript types.
* 📡 API Versioning (/v1, /v2) for backward compatibility.
* 🐳 Docker Compose for local development & containerized deployment.
* 🗄️ Database Service - Centralized PostgreSQL or MongoDB instance.
* 🔄 CI/CD Automation with GitHub Actions.
* ✅ Testing - Unit, integration, and end-to-end tests using Jest and Cypress.

This architecture is designed for scalability, maintainability, and performance! 🚀

## 📂 Project Structure
📂 /training-software-architecture-poc │── 📂 /apps │ ├── 🌍 /web-app # Next.js frontend │ │── 📂 /services │ ├── 🔗 /gateway-service # Handles web app communication │ ├── 🔐 /auth-service # Handles authentication │ ├── 🏡 /listing-service # Manages property listings │ ├── 📅 /booking-service # Handles reservations │ ├── 💰 /payment-service # Integrates Stripe/PayPal │ ├── ⭐ /review-service # Handles user reviews │ ├── 📩 /notification-service # Sends emails, SMS, push notifications │ ├── 🔍 /search-service # Handles property search & recommendations │ ├── 📄 /api-docs # Swagger API documentation │ │── 📂 /infra │── 🐳 docker-compose.yml # Manages all services │── 📖 README.md

## 🛠️ Tech Stack

## 📜 Install

## Testing