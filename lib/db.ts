import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL!;

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connect = async () => {
  if (cached.conn) return cached.conn;

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "dev-blog",
      bufferCommands: false,
      connectTimeoutMS: 30000,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};

// import mongoose from "mongoose";

// const MONGODB_URL = process.env.MONGODB_URL;
// let cached = (global as any).mongoose || { conn: null, promise: null };

// export const connectToDatabase = async () => {
//   if (cached.conn) return cached.conn;

//   if (!MONGODB_URL) throw new Error("MONGODB_URL is Missing");

//   cached.promise =
//     cached.promise ||
//     mongoose.connect(MONGODB_URL, {
//       dbName: "evently",
//       bufferCommands: false,
//     });

//   cached.conn = await cached.promise;

//   return cached.conn;
// };
