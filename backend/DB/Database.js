// import mongoose from 'mongoose';

// export const connectDB = async (req, res) => {
//     const db = process.env.MONGO_URI;
//         console.log("Connecting to MongoDB using URI: ", db);

//     if (!db) {
//         throw new Error("MongoDB URI not found. Please check your .env file.");
//     }

//     const { connection } = await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

//     console.log(`MongoDB Connected to ${connection.host}`);
// };


import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async (req, res) => {
    const db = process.env.MONGO_URI;
    console.log("Connecting to MongoDB using URI: ", db); // Check if it's undefined

    if (!db) {
        throw new Error("MongoDB URI not found. Please check your .env file.");
    }

    const { connection } = await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`MongoDB Connected to ${connection.host}`);
};
