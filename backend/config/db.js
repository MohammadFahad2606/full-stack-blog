import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoUri = process.env.MONGO_URI;

const connectDB = async () => {
  console.log(mongoUri);
  try {
      await mongoose.connect(mongoUri);
      console.log('MongoDB Connected...');
  } catch (err) {
      console.error(err.message);
      process.exit(1);
  }
};

export default connectDB;
