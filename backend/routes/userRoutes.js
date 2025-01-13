import express from 'express';
import { addUser, deleteUser, updateUser } from '../controllers/userController.js';
import { authenticateToken, authorizeAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateToken, authorizeAdmin, addUser);
router.delete('/:id', authenticateToken, authorizeAdmin, deleteUser);
router.put('/:id', authenticateToken, authorizeAdmin, updateUser);

export default router;