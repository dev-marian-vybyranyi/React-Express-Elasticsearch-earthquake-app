# Earthquake Watch Service

This application allows users to search for earthquake data using criteria like event type, magnitude, location, and date range. It uses a React frontend, an Express backend, and Elasticsearch for efficient data retrieval.

## Features
- **Search Filters**: Filter by earthquake type (earthquake, quarry blast, ice quake, explosion).
- **Magnitude Filtering**: Filter by minimum magnitude.
- **Location Search**: Search by city, state, or country.
- **Date Range**: Filter results from the past 7 to 30 days.
- **Sorting**: Sort results by magnitude (descending or ascending).
- **Interactive UI**: View results in a clean, card-based layout.

## Technologies
- **Frontend**: React, Vite, Axios.
- **Backend**: Node.js, Express, Elasticsearch Client.
- **Database**: Elasticsearch (Cloud ID).

## Getting Started

### Prerequisites
- Node.js and npm installed.
- An Elasticsearch instance (Elastic Cloud ID, Username, Password, API Key).

### Installation
1. Clone the repository.
2. Install dependencies for the whole project:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

### Configuration
1. Create a `.env` file in the **root** directory with your Elasticsearch credentials (refer to the project's `.env.template` if available):
   ```env
   ELASTIC_CLOUD_ID=...
   ELASTIC_USERNAME=...
   ELASTIC_PASSWORD=...
   ELASTIC_API_KEY=...
   ```
2. Create a `.env` file in the **client** directory:
   ```env
   VITE_API_URL=http://localhost:3001
   ```

### Running the Application
1. Start the backend server (from the `server` folder):
   ```bash
   # In terminal 1
   cd server
   npm run dev
   ```
2. Start the frontend development server (from the `client` folder):
   ```bash
   # In terminal 2
   cd client
   npm run dev
   ```
