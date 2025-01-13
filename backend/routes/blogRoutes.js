import express from 'express';
import { addBlog, deleteBlog, updateBlog } from '../controllers/blogController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateToken, addBlog);
router.delete('/:id', authenticateToken, deleteBlog);
router.put('/:id', authenticateToken, updateBlog);

export default router;