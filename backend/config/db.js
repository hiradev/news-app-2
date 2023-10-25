import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.DB_URL;
  try {
    await mongoose.connect(uri);
    console.log("Database is connected...");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;