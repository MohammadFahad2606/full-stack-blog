import express from 'express';
  import dotenv from 'dotenv';
import connectDB from './config/db.js';

// import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

dotenv.config();


const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Routes
// app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);
const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`) 
})
connectDB();

