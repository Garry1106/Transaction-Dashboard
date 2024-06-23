# Transaction Analysis Hub

Transaction Analysis Hub is a web application developed using the MERN stack (MongoDB, Express.js, React, Node.js) designed for transaction analysis and visualization. The platform provides users with comprehensive tools to track, analyze, and visualize their financial transactions. With intuitive dashboards, dynamic charts, and real-time data processing, Transaction Analysis Hub ensures users can make informed financial decisions with ease.

## Screenshots
![transaction-dashboard](https://github.com/Garry1106/Transaction-Dashboard/assets/101012709/f15d85ca-6689-4b6f-ad62-c2ffa88e3147)
![statistics](https://github.com/Garry1106/Transaction-Dashboard/assets/101012709/7762d0fb-8592-4fae-be04-8357a3a6524b)
![bar-chart](https://github.com/Garry1106/Transaction-Dashboard/assets/101012709/08145547-2dd4-4cff-8a1a-e693b7e5c5e8)
![pie-chart](https://github.com/Garry1106/Transaction-Dashboard/assets/101012709/08144048-981f-412c-87ae-620c24ba9d35)


## Features
- **User Authentication**: Secure user registration and login.
- **Transaction Management**: Add, edit, delete, and view transactions.
- **Data Visualization**: Interactive charts and graphs to visualize transaction trends.
- **Filtering and Sorting**: Advanced filtering and sorting options for transaction data.
- **Responsive Design**: Fully responsive layout, ensuring usability across different devices.

## Tech Stack
- **Frontend**: React.js, Axios, Recharts, React Chart.js 2
- **Backend**: Node.js, Express.js ,Mongoose
- **Database**: MongoDB
- Others: nodemon (for auto-restarting the server), cors (for enabling CORS in Express)

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js
- npm (Node Package Manager) or yarn
- MongoDB

### Steps

1. **Clone the repository**
   ```bash
   git clone (https://github.com/Garry1106/Transaction-Dashboard.git)
   cd Transaction-Dashboard
   ```

2. **Install dependencies for the backend**
   ```bash
   cd backend
   npm install
   ```

3. **Install dependencies for the frontend**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `backend` directory and add the following:
   ```
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

5. **Run the backend server**
   ```bash
   cd backend
   npm start
   ```

6. **Run the frontend server**
   Open a new terminal window and run:
   ```bash
   cd frontend
   npm start
   ```

   The application should now be running at `http://localhost:3000`.

## Usage
1. **Register a new user**: Access the registration page and create a new account.
2. **Login**: Use your credentials to log in.
3. **Add Transactions**: Navigate to the transactions page and add new transactions.
4. **View and Analyze**: Use the various filtering, sorting, and visualization tools to analyze your transaction data.

## Contributing
We welcome contributions! 

