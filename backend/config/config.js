import dotenv from 'dotenv';
dotenv.config();

if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not set');
}
if (!process.env.JWT_SECRET_KEY) {
    throw new Error('JWT_SECRET_KEY environment variable is not set');
}

export const config = {
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
}
