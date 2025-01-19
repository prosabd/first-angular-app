# Angular Housing Project

This project is a result of following the official Angular tutorial to gain first-hand experience with Angular development. It showcases various Angular features and concepts, serving as a learning platform for beginners.

## Features

- Display a list of housing locations
- Search functionality by city
- Detailed view for each housing location
- Application form for housing requests
- RESTful API integration using JSON Server

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (LTS version recommended)
- npm (comes with Node.js)
- Angular CLI: `npm install -g @angular/cli`

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/prosabd/first-angular-app.git
   cd first-angular-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Angular development server:
   ```bash
   npm start
   # or
   ng serve
   ```
   The application will be available at `http://localhost:3000`

4. In a new terminal, start the JSON server:
   ```bash
   npm run json-server
   ```
   The API will be available at `http://localhost:3001`

## Development Notes

- The Angular app runs on port 3000 by default
- JSON Server runs on port 3001 and serves the mock data from `db.json`
- The application requires both servers to be running simultaneously
- API endpoints:
  - GET `/` - List all housing locations
  - GET `/details/:id` - Get specific housing location

## Preview
![Illustration](https://github.com/user-attachments/assets/d111b675-724f-4a61-aab4-1e16b591995e)
