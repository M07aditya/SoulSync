import mongoose from 'mongoose';

const Connection = async () => {
  try {
    const MONGODB_URI = 'mongodb+srv://adityamurari7:aditya@cluster0.mf22q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Fetch from environment variables
    if (!MONGODB_URI) {
      throw new Error('MongoDB URI is missing in environment variables');
    }
    await mongoose.connect(MONGODB_URI);
    console.log('Database connected successfully!!!');
  } catch (error) {
    console.error('Error while connecting with the database', error.message);
    process.exit(1); // Exit the process if database connection fails
  }
};

export default Connection;
