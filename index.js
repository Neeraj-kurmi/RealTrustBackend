import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import projectRoutes from './routes/projectRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import subscribeRoutes from './routes/subscribeRoutes.js';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
  origin: "https://real-trust-one.vercel.app/",
  credentials: true
}));
app.use(express.json({ limit: '5mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/subscribers', subscribeRoutes);

// MongoDB Connection
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
});
