import {Router} from 'express';
import {createProduct} from '../controllers/product.controller.js';
import {authMiddleware} from '../middlewares/auth.middleware.js';
import { productValidator } from '../validators/product.validator.js';
import multer from 'multer';

const productRouter = Router();
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {fileSize: 1024 * 1024 * 10}
});

productRouter.post('/', authMiddleware,productValidator, upload.array('image',7), createProduct);
export default productRouter;