import mongoose from 'mongoose';

import { config } from './config.js';

function connectDatabase() {
    mongoose.connect(config.MONGODB_URI).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
}

export default connectDatabase;
