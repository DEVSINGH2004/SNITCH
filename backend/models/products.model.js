import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        amount :{
            type: Number,
            required: true,
        },
        currency :{
            type: String,
            enum: ['INR', 'USD', 'EUR'],
            default: 'INR',
        }
    },
    description: {
        type: String,
        required: true,
    },
    image: [
        {
            url:{
                type: String,
                required: true,
            }
        }
    ],
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
}, {timestamps: true})

const productModel = mongoose.model('product', productSchema);

export default productModel;