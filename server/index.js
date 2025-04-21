// / <reference types="node" />

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import emailRoutes from './routes/emailRoutes.js';
import authRoutes from './routes/authRoutes.js';
import merchRoutes from './routes/merchRoutes.js';

import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

// API Routes
app.use('/subscribe', emailRoutes);
app.use('/auth', authRoutes);
app.use('/merch', merchRoutes);

// Serve static files from the Vite frontend build
app.use(express.static(path.join(__dirname, '../client/dist')));

// Catch-all route for React Router (must come last)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// ✅ Connect to MongoDB and start server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
};

startServer();