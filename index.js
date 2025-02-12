import express from 'express';
import connectMongo from './DB/Config.js'; // Ensure the file extension is .js
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from "cors"
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectMongo();

// Middleware to parse JSON
// app.use(express.json());
app.use(cors())
app.use(bodyParser.json())

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev')); // Log requests only in development
}


//importing routers
import  RestuarntRoutes  from './Routers/Restuarant.routers.js';



//router handler.
app.use('/api/restuarant',RestuarntRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
