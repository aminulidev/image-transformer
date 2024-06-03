import mongoose, {Mongoose} from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cashed: MongooseConnection = (global as any).mongoose;

if (!cashed) {
    cashed = (global as any).mongoose = {
        conn: null, promise: null
    }
}

export const connectionToDatabase = async () => {
    if (cashed.conn) return cashed.conn;

    if (!MONGODB_URI) throw new Error('MongoDB URI is missing');

    cashed.promise = cashed.promise ||
        mongoose.connect(MONGODB_URI,  {
            dbName: "imaginify", bufferCommands: false
        })

    cashed.conn = await cashed.promise;
    return cashed.conn;
}