import express from 'express';
  import dotenv from 'dotenv';
import connectDB from './config/db';

// import authRoutes from './routes/authRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import blogRoutes from './routes/blogRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));