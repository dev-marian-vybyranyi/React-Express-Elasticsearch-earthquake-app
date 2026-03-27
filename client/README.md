# Earthquake Watch - Frontend

This is the React-based frontend for the Earthquake Watch Service, built with Vite.

## Features
- **Dynamic Filtering**: Selection menus for earthquake types, magnitude levels, and date ranges.
- **Location Input**: Text search for specific geographical regions.
- **Real-time Results**: Instant feedback using Axios to communicate with the backend.
- **Componentized Architecture**: Cleanly separated components for the Navigation Bar, Filter Form, and Search Results.

## Installation & Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file with the backend API URL:
   ```env
   VITE_API_URL=http://localhost:3001
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Key Components
- `App.jsx`: Main container and API orchestrator.
- `FilterForm.jsx`: Handles user input and search criteria.
- `SearchResults.jsx`: Displays earthquake data cards.
- `NavBar.jsx`: Site navigation.
