import express from 'express';
import { register, login, forgotPassword } from '../controllers/authController.js';
import { body } from 'express-validator';
import { validateInput } from '../utils/validateInput.js';

const router = express.Router();

router.post('/register',
    body('username').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    validateInput,
    register
);

router.post('/login', login);
router.post('/forgot-password', forgotPassword);

export default router;