# Finance Logger

A full-stack finance logging application built with React + Vite + TypeScript for the frontend and Express for the backend. The application uses cookie storage to track the last entry date and provides a RESTful API for managing finance entries.

## Features

- Add financial entries with amount, category, description, and date
- View all entries in a table format
- Delete entries
- Cookie-based storage of last entry date
- Responsive design with Tailwind CSS

## Tech Stack

- Frontend:
  - React
  - TypeScript
  - Vite
  - Tailwind CSS
  - Axios
  - js-cookie

- Backend:
  - Express
  - TypeScript
  - cookie-parser
  - cors

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Start the development servers:

```bash
# Start backend server (from backend directory)
npm run dev

# Start frontend server (from frontend directory)
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## API Endpoints

- GET `/api/finance` - Get all finance entries
- POST `/api/finance` - Create a new finance entry
- DELETE `/api/finance/:id` - Delete a finance entry

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
PORT=5000
NODE_ENV=development
```

