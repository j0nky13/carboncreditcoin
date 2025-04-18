// / <reference types="node" />

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import emailRoutes from './routes/emailRoutes.js';
import authRoutes from './routes/authRoutes.js';
import merchRoutes from './routes/merchRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB error:', err));

// API Routes
app.use('/api/subscribe', emailRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/merch', merchRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});