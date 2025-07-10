import express from 'express';
import { getClients, createClient } from '../controllers/clientController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.get('/', getClients);
router.post('/upload', upload.single('image'), createClient);

export default router;
