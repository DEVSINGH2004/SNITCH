import productModel from '../models/products.model.js';
import { uploadFile } from '../services/image.service.js';
export async function createProduct(req, res) {
    const {name,amount,currency,description} = req.body;
    const image = await Promise.all(req.files.map(async (file) => {
        return await uploadFile({
            buffer: file.buffer,
            fileName: file.originalname,
        })
    }))
    
    const product = await productModel.create({
        name,
        price: {
            amount: amount,
            currency: currency,
        },
        description,
        image,
        seller: req.user.id,
    })
    res.status(201).json({
        message: 'Create Product successfully',
        product,
    })
}