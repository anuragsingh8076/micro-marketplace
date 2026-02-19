import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/products", productRoutes);


app.listen(5000, () => console.log("Backend running on port 5000"));