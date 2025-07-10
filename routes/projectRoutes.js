import express from 'express';
import { getProjects, createProject } from '../controllers/projectController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.get('/', getProjects);
router.post('/upload', upload.single('image'), createProject);

export default router;
