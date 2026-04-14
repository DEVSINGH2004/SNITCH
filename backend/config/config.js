import dotenv from 'dotenv';
dotenv.config();

if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not set');
}
if (!process.env.JWT_SECRET_KEY) {
    throw new Error('JWT_SECRET_KEY environment variable is not set');
}
if (!process.env.GOOGLE_CLIENT_ID) {
    throw new Error('GOOGLE_CLIENT_ID environment variable is not set');
}
if (!process.env.GOOGLE_CLIENT_SECRET) {
    throw new Error('GOOGLE_CLIENT_SECRET environment variable is not set');
}
if (!process.env.IMAGEKIT_PRIVATE_KEY) {
    throw new Error('IMAGEKIT_PRIVATE_KEY environment variable is not set');
}

export const config = {
    MONGODB_URI: process.env.MONGODB_URI,
    IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
}
