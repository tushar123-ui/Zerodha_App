# Zerodha – Full Stack Stock Trading Simulation Platform

## Executive Summary

Zerodha is a full-stack, Zerodha-inspired stock trading simulation project developed to demonstrate the implementation of a modern MERN application. The project is divided into three independent applications: a public-facing landing website, a React-based trading dashboard, and a Node.js/Express backend connected to MongoDB.

The platform provides user registration and login, a protected dashboard, watchlist interface, simulated Buy and Sell orders, holdings, order history, and simulated funds management. The backend uses JWT-based authentication with HTTP-only cookies, password hashing, REST API routes, and Mongoose models to manage application data.

The project was developed to apply practical full-stack development concepts, including React component architecture, client-side routing, API integration, authentication workflows, database modeling, and deployment of a multi-service application. It is intended for educational and portfolio demonstration purposes; it is not a real brokerage platform and does not execute real stock-market transactions.

---

## Project Overview

Zerodha is designed as a simulated online trading environment where users can create an account, access a personal dashboard, explore a stock watchlist, place Buy or Sell orders, review holdings and order history, and manage demo funds.

The application is organized into three main parts. The frontend provides the public website and account entry points. The dashboard provides the authenticated trading interface and portfolio-related screens. The backend exposes REST APIs, validates authentication cookies, performs application operations, and stores user and trading data in MongoDB.

The project focuses on separating presentation, API processing, and database responsibilities. React Router is used for navigation in both frontend applications, Axios is used for HTTP communication, and Express middleware is used to process requests and verify authenticated users on protected routes.

---

## Problem Statement

A trading application interface involves more than displaying stock prices. It requires user account management, protected access to personal information, order processing, portfolio records, and a consistent view of available funds. Building these features together introduces practical challenges involving frontend state, REST API communication, authentication, database relationships, and validation of user input.

This project addresses these development challenges by creating a learning-oriented trading platform with separate frontend, dashboard, and backend applications. It provides a practical environment for understanding how a full-stack application is structured and how its major components communicate with one another.

---

## Solution

The project provides a three-part application architecture:

- **Frontend:** A public landing website with product information, pricing, support, About, login, and signup pages.
- **Trading Dashboard:** A React application containing the watchlist, account summary, holdings, positions interface, order history, and funds screens.
- **Backend:** An Express API that handles authentication, user account operations, order processing, funds management, and MongoDB persistence.

The backend uses JWT tokens stored in HTTP-only cookies for browser authentication. Passwords are hashed before being stored. Protected Funds and Orders routes use authentication middleware to identify the current user before processing account-specific requests.

---

## Project Objectives

The primary objectives of this project are to:

- Build a complete full-stack application using the MERN stack.
- Develop a responsive public-facing landing website.
- Create a separate React trading dashboard with reusable components.
- Implement user registration, login, logout, and account management.
- Use JWT-based authentication with HTTP-only cookies.
- Store user, holding, order, and account information in MongoDB.
- Implement simulated Buy and Sell order workflows.
- Display holdings, order history, watchlist information, and account funds.
- Integrate frontend applications with backend REST APIs using Axios.
- Practice deployment of multiple services from a single repository.

---

## Key Features

- Public landing website with Home, About, Products, Pricing, and Support sections.
- User registration and login pages.
- JWT-based authentication using HTTP-only cookies.
- Protected trading dashboard.
- Watchlist interface for viewing stock information and opening Buy/Sell actions.
- Simulated Buy and Sell order processing.
- User-associated holdings and order history through protected API routes.
- Funds overview with simulated Add Funds and Withdraw operations.
- Account username update, logout, and account deletion interfaces.
- Portfolio summary and chart visualizations.
- Responsive layouts for desktop, tablet, and mobile screens.

---

# Technology Stack

The project uses the MERN stack across three separately maintained applications. React and Vite are used for the client applications, while Node.js, Express, and MongoDB power the backend. Supporting libraries provide routing, API communication, authentication, styling, and chart visualization.

---

## Public Frontend

| Technology | Purpose |
|------------|---------|
| **React 19** | Builds the component-based landing website and account pages. |
| **Vite** | Provides the frontend development server and production build tooling. |
| **React Router DOM** | Handles navigation between public pages and authentication screens. |
| **Axios** | Sends login and signup requests to the backend API. |
| **React Icons** | Provides icon components for the user interface. |
| **HTML5** | Defines the page structure. |
| **CSS3** | Styles the landing website and responsive layouts. |
| **Bootstrap 5** | Provides responsive layout utilities and interface components. |

---

## Trading Dashboard

| Technology | Purpose |
|------------|---------|
| **React 19** | Builds dashboard screens and reusable UI components. |
| **Vite** | Runs the dashboard development server and generates production builds. |
| **React Router DOM** | Handles dashboard navigation and route rendering. |
| **Material UI** | Provides interface components and styling utilities. |
| **Emotion** | Supports styling used by Material UI. |
| **Axios** | Communicates with authenticated backend APIs. |
| **Chart.js** | Provides chart rendering for portfolio-related visualizations. |
| **React Chart.js 2** | Integrates Chart.js with React components. |
| **Bootstrap 5** | Provides responsive layout and utility classes. |
| **CSS3** | Handles dashboard-specific styling and responsive behaviour. |

---

## Backend

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runs the server-side JavaScript application. |
| **Express.js** | Defines REST API routes and middleware. |
| **Mongoose** | Defines MongoDB schemas and performs database operations. |
| **bcryptjs** | Hashes user passwords before persistence and verifies login passwords. |
| **JSON Web Token (JWT)** | Creates and verifies authentication tokens. |
| **Cookie-Parser** | Reads authentication cookies from incoming requests. |
| **CORS** | Controls which frontend origins can access the backend from browsers. |
| **Dotenv** | Loads backend environment variables. |
| **Body-Parser** | Parses JSON request bodies. |

---

## Database

| Technology | Purpose |
|------------|---------|
| **MongoDB** | Stores user accounts, holdings, orders, and related application records. |
| **Mongoose** | Defines schemas and provides an object-modeling layer for MongoDB. |

---

## Authentication and API Communication

| Technology | Purpose |
|------------|---------|
| **JWT** | Represents the authenticated user in signed tokens. |
| **HTTP-only Cookies** | Carries the authentication token in browser requests without exposing it to ordinary client-side JavaScript. |
| **bcryptjs** | Provides password hashing and password comparison. |
| **Express Middleware** | Verifies authentication before protected Funds and Orders operations. |
| **Axios** | Connects the frontend and dashboard applications to backend APIs. |

---

# Project Structure

The repository is organized as a monorepo containing three independent applications. Each application has its own package configuration and dependency lockfile.

```text
Zerodha_App/
│
├── frontend/
│   ├── public/
│   │   ├── media/
│   │   └── font-awesome/
│   ├── src/
│   │   ├── landing-page/
│   │   │   ├── about/
│   │   │   ├── home/
│   │   │   ├── login/
│   │   │   ├── pricing/
│   │   │   ├── products/
│   │   │   ├── signup/
│   │   │   ├── support/
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── dashboard/
│   ├── public/
│   │   ├── font-awesome/
│   │   ├── logo.png
│   │   └── kite.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Apps.jsx
│   │   │   ├── BuyActionWindow.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── DeleteAccount.jsx
│   │   │   ├── Funds.jsx
│   │   │   ├── Holdings.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── Positions.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── SellActionWindow.jsx
│   │   │   ├── Summary.jsx
│   │   │   ├── WatchList.jsx
│   │   │   └── ...
│   │   ├── data/
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── model/
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   ├── PositionsModel.js
│   │   └── UserModel.js
│   ├── routes/
│   │   ├── AuthRoute.js
│   │   ├── DeleteLogic.js
│   │   ├── FundsRoute.js
│   │   └── OrderRoute.js
│   ├── schema/
│   │   ├── HoldingSchema.js
│   │   ├── OrdersSchema.js
│   │   ├── PositionsSchema.js
│   │   └── UserSchema.js
│   ├── .gitignore
│   ├── app.js
│   └── package.json
│
└── README.md
```

## Directory Overview

| Directory / File | Description |
|------------------|-------------|
| **frontend/src/landing-page/** | Contains the public website pages, including Home, About, Products, Pricing, Support, Login, and Signup. |
| **frontend/public/** | Stores static assets used by the public website. |
| **dashboard/src/components/** | Contains dashboard components such as WatchList, Summary, Holdings, Orders, Positions, Funds, and Buy/Sell windows. |
| **dashboard/src/data/** | Contains data used by dashboard components. |
| **dashboard/public/** | Stores dashboard assets such as logos and icons. |
| **backend/routes/** | Defines authentication, account, funds, and order API routes. |
| **backend/middlewares/** | Contains authentication middleware for protected routes. |
| **backend/model/** | Creates Mongoose models for users, holdings, orders, and positions. |
| **backend/schema/** | Defines MongoDB document structures. |
| **backend/app.js** | Configures Express, middleware, CORS, database connection, and route mounting. |
| **package.json** | Defines application dependencies and scripts for each application. |
| **package-lock.json** | Records the resolved dependency tree for reproducible installation. |

---

# Project Organization

The application follows a separated client–server structure:

- **Frontend** handles public pages and account entry points.
- **Dashboard** handles authenticated trading screens and portfolio-related UI.
- **Backend** processes API requests, authentication, business operations, and database access.
- **Models and Schemas** define how user and trading records are represented in MongoDB.
- **Middleware** verifies signed authentication tokens before protected operations.

Keeping these responsibilities separate makes the codebase easier to navigate and allows the public website, dashboard, and backend to be developed and deployed independently.

---

# Core Functionalities

The project combines public website functionality with an authenticated trading dashboard and a backend that stores account and trading records.

---

## Public Website

The public frontend provides informational pages and account entry points for the application.

**Pages**

- Home
- About
- Products
- Pricing
- Support
- Login
- Signup

---

## User Registration and Authentication

Users can create an account and log in to access the trading dashboard. The backend validates submitted fields, hashes passwords using bcryptjs, and issues a signed JWT after successful registration or login.

The token is sent through an HTTP-only cookie. Protected dashboard and backend operations use the authentication flow to identify the current user.

**Features**

- User registration
- User login
- Password hashing and comparison
- JWT token generation and verification
- Authentication status check
- Logout
- Username update
- Account deletion interface

---

## Trading Dashboard and Watchlist

The dashboard provides a trading-oriented interface with navigation, watchlist information, and portfolio-related screens.

**Features**

- Protected dashboard entry
- Watchlist interface
- Stock selection for Buy and Sell actions
- Dashboard summary
- Chart-based portfolio visualization
- Responsive dashboard layout

---

## Simulated Buy and Sell Orders

Authenticated users can submit Buy and Sell requests through the dashboard. The backend checks the user's account and existing holdings, updates the simulated available balance, and stores order history.

**Features**

- Buy order request
- Sell order request
- Available balance check for Buy requests
- Existing quantity check for Sell requests
- Holding creation and quantity updates
- Average-cost calculation for repeated purchases
- Order history persistence

These operations are intended for simulation and learning. They do not route orders to a stock exchange or execute real trades.

---

## Holdings

The Holdings screen displays stock records associated with the account. The backend exposes an authenticated holdings endpoint that retrieves records using the authenticated user's identifier.

**Features**

- View holdings
- Display quantity and average cost information
- Display price and portfolio-related values
- Portfolio summary visualization

---

## Orders

The Orders screen displays order records saved by the backend. The order endpoint returns the authenticated user's order history, with recent orders sorted first.

**Features**

- View order history
- Display stock name, quantity, price, and transaction mode
- Show Buy and Sell order records

---

## Funds Management

The Funds screen provides a simulated account balance interface. Authenticated users can view their available balance and used margin, and submit Add Funds or Withdraw requests.

**Features**

- View available balance
- View used margin
- Add simulated funds
- Withdraw simulated funds
- Validate insufficient balance in the user interface

No real UPI transfer, bank transfer, payment gateway, or deposit settlement is connected in the current project.

---

## Positions Interface

A Positions screen is included in the dashboard. The dedicated user-scoped Positions API and complete positions workflow are not yet implemented in the current codebase. This area is a planned improvement and should not be treated as a completed independent positions-management feature.

---

## Account Management

The dashboard provides account-related actions for authenticated users.

**Features**

- Update username
- Logout
- Delete account

Account deletion and related-record cleanup should be reviewed before production use to ensure all associated trading records are handled consistently.

---

# Backend Architecture

The backend is implemented using Node.js and Express.js. It exposes REST API routes for authentication, funds management, and order processing. Mongoose models provide the interface to MongoDB, while middleware verifies the JWT cookie for protected endpoints.

The backend uses environment variables for the MongoDB connection string, JWT signing secret, and optional server port. Secret values are intended to remain in the backend environment and must not be committed to the public repository.

---

# Database Design

MongoDB is used as the application's primary database, with Mongoose schemas defining the main document structures.

The current models include the following collections:

### User

Stores account information and simulated account balances, including email, username, hashed password, available balance, and used margin.

### Holding

Stores a user's stock holding information, including user reference, stock name, quantity, average cost, price, net, and day values.

### Order

Stores order records, including user reference, stock name, quantity, price, transaction mode, and timestamps.

### Position

A positions schema and model are present in the codebase. The current dashboard does not yet have a dedicated user-scoped positions endpoint and complete positions workflow.

---

# Request Processing

A typical authenticated dashboard request follows this flow:

```text
Dashboard Component
        │
        ▼
Axios HTTP Request
        │
        ▼
Express API Route
        │
        ▼
Authentication Middleware
        │
        ▼
Route Handler / Business Logic
        │
        ▼
Mongoose Model
        │
        ▼
MongoDB
        │
        ▼
JSON Response
        │
        ▼
React Dashboard Update
```

This flow separates the user interface, API processing, authentication, and database operations.

---

# API Overview

The backend exposes the following application routes in the current codebase.

## Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/auth/signup` | Registers a new user account. |
| **POST** | `/auth/login` | Validates credentials and creates an authentication cookie. |
| **POST** | `/auth/me` | Checks the current authentication cookie and returns account information. |
| **PUT** | `/auth/update-username` | Updates the authenticated user's username. |
| **POST** | `/auth/logout` | Clears the authentication cookie. |
| **DELETE** | `/auth/delete-account` | Deletes the user account. Related-record cleanup should be verified before production use. |

## Funds Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/funds/get-funds` | Returns the authenticated user's available balance and used margin. |
| **POST** | `/funds/update-funds` | Adds or withdraws simulated funds from the account balance. |

## Order Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/orders/place-order` | Places a simulated Buy or Sell order. |
| **GET** | `/orders/get-holdings` | Retrieves holdings associated with the authenticated user. |
| **GET** | `/orders/get-orders` | Retrieves the authenticated user's order history. |

A dedicated `/orders/get-positions` route is not implemented in the current codebase.

---

# Security Considerations

The project includes foundational security mechanisms such as password hashing, JWT-based authentication, HTTP-only cookies, CORS configuration, environment-based secret management, and authentication middleware on the core Funds and Orders routes.

Before using the application beyond an educational demonstration, the following areas require additional review and hardening:

- Ensure every data-returning and data-changing route requires authentication where appropriate.
- Apply server-side validation to all funds and order inputs.
- Use database transactions for balance, holdings, and order updates so partial failures do not leave inconsistent account records.
- Complete user-scoped Positions support.
- Review cookie path, SameSite, Secure, and CSRF/origin protection settings for the deployment domains.
- Add login and signup rate limiting.
- Ensure account deletion handles all records belonging to the user.
- Keep MongoDB and JWT secrets in backend environment variables only.

This project is an educational simulation and has not been presented as a production brokerage or a security-audited financial service.

---

# Installation

Follow the steps below to run the three applications locally. Run the backend, public frontend, and dashboard in separate terminals.

## 1. Clone the Repository

```bash
git clone <repository-url>
cd Zerodha_App
```

## 2. Install and Configure the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
PORT=8080
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
```

Start the backend:

```bash
node app.js
```

The backend runs on port `8080` by default, unless another `PORT` value is configured.

## 3. Install and Configure the Public Frontend

Open a separate terminal:

```bash
cd frontend
npm install
```

Create a local environment file such as `.env.local` inside the `frontend` directory:

```env
VITE_API_URL=http://localhost:8080
VITE_DASHBOARD_URL=http://localhost:5174
```

Start the public frontend:

```bash
npm run dev -- --port 5173
```

## 4. Install and Configure the Dashboard

Open another terminal:

```bash
cd dashboard
npm install
```

Create a local environment file such as `.env.local` inside the `dashboard` directory:

```env
VITE_API_URL=http://localhost:8080
VITE_FRONTEND_URL=http://localhost:5173
```

Start the dashboard:

```bash
npm run dev -- --port 5174
```

The frontend and dashboard use separate Vite development servers. The backend CORS configuration must allow the local origins used by these applications.

---

# Environment Variables

Environment variables are configured separately for each application.

## Backend

| Variable | Description |
|----------|-------------|
| `PORT` | Optional port used by the Express server. Defaults to `8080`. |
| `MONGODB_URL` | MongoDB connection string used by Mongoose. |
| `JWT_SECRET` | Private secret used to sign and verify JWT tokens. |

## Public Frontend

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Base URL of the backend API. |
| `VITE_DASHBOARD_URL` | Base URL of the deployed or local trading dashboard. |

## Trading Dashboard

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Base URL of the backend API. |
| `VITE_FRONTEND_URL` | Base URL of the public frontend. |

Do not place `MONGODB_URL`, `JWT_SECRET`, database passwords, or other private credentials in frontend environment variables. Variables prefixed with `VITE_` are included in the client-side build and must contain only public configuration values.

---

# Deployment

The repository is structured for deployment as three separate Render services.

## Backend Web Service

| Setting | Value |
|---------|-------|
| Service Type | Web Service |
| Root Directory | `backend` |
| Build Command | `npm install` |
| Start Command | `node app.js` |

Configure `MONGODB_URL` and `JWT_SECRET` in the backend service's environment settings. Set `PORT` only if required by the hosting configuration; the application reads the platform-provided port.

## Public Frontend Static Site

| Setting | Value |
|---------|-------|
| Service Type | Static Site |
| Root Directory | `frontend` |
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |

Configure `VITE_API_URL` and `VITE_DASHBOARD_URL` as build-time environment variables for this service.

## Trading Dashboard Static Site

| Setting | Value |
|---------|-------|
| Service Type | Static Site |
| Root Directory | `dashboard` |
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |

Configure `VITE_API_URL` and `VITE_FRONTEND_URL` as build-time environment variables for this service.

## Client-Side Route Rewrites

For both React static sites, configure a rewrite rule so direct navigation and page refreshes work with React Router:

| Source | Destination | Action |
|--------|-------------|--------|
| `/*` | `/index.html` | Rewrite |

After changing any `VITE_` environment variable in the hosting dashboard, trigger a new build/deployment so the updated value is included in the client bundle.

## Live Zerodha

The public Zerodha_App is deployed here:

**Project Link:** https://zerodha-frontend-uhej.onrender.com

---

# Known Scope and Limitations

- The project is a simulated trading application and does not connect to a stock exchange.
- Market prices shown in the current dashboard are generated for demonstration and are not verified live market quotes.
- Add Funds and Withdraw operations update simulated account balances; no real UPI or payment gateway is connected.
- The Positions screen is present, but a dedicated user-scoped Positions API and complete workflow are not yet implemented.
- The current backend requires further validation, authorization, transaction, and deployment hardening before any real financial use.
- Automated backend tests are not configured in the current package scripts.

---

# Future Improvements

The following enhancements can improve the project in future iterations:

- Implement a dedicated user-scoped Positions API and position lifecycle.
- Add server-side stock-price simulation or a suitable market-data integration for demonstration.
- Add atomic MongoDB transactions for funds, holdings, and orders.
- Strengthen request validation and API rate limiting.
- Add automated backend tests and frontend component tests.
- Improve account activity and transaction history reporting.
- Add clearer loading, success, and failure states across dashboard operations.
- Improve accessibility and responsive behaviour across all screens.
- Add CI checks for linting, builds, and dependency audits.

---

# Project Status

The project includes a public React website, a separate React trading dashboard, and an Express/MongoDB backend. Core account, dashboard, simulated order, holdings, order-history, and funds interfaces are implemented.

The application is suitable for portfolio presentation and demonstrating full-stack development concepts. Additional backend validation, complete Positions integration, transaction consistency, security hardening, and automated testing are recommended before treating the application as production-ready.

---

# Author

**Tushar Gurupanch**

Full-Stack Developer | MERN Stack

**Project:** Zerodha-Inspired Stock Trading Simulation Platform
