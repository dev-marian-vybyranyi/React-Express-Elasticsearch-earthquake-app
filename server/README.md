# Earthquake Watch - Backend

This is the Express-based backend for the Earthquake Watch Service, integrated with Elasticsearch.

## Features
- **Elasticsearch Integration**: Robust search capabilities using the official Elasticsearch JS client.
- **Dynamic Queries**: Builds filtering queries for earthquake types, magnitude levels, locations, and time ranges.
- **CORS Enabled**: Ready for cross-origin requests from the React frontend.
- **Data Management**: Includes scripts for ingesting and managing earthquake data.

## Installation & Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure credentials in the **root** `.env` file:
   ```env
   ELASTIC_CLOUD_ID=...
   ELASTIC_USERNAME=...
   ELASTIC_PASSWORD=...
   ELASTIC_API_KEY=...
   ```
3. Start the server (using nodemon for development):
   ```bash
   npm run dev
   ```

## API Endpoints
- `GET /results`: Main search endpoint.
  - Parameters: `type`, `mag`, `location`, `dateRange`, `sortOption`.
- `POST /ingest_data`: Utility endpoint for data ingestion.

## Directory Structure
- `elasticsearch/`: Client configuration and connection setup.
- `data_management/`: Scripts for data fetching and ingestion.
- `server.js`: Main Express application and route handlers.
