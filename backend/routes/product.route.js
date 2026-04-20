import {Router} from 'express';
import {createProduct} from '../controllers/product.controller.js';
import {authMiddleware} from '../middlewares/auth.middleware.js';
import { productValidator } from '../validators/product.validator.js';
import { showProduct } from '../controllers/product.controller.js';
import multer from 'multer';

const productRouter = Router();
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {fileSize: 1024 * 1024 * 10}
});

productRouter.post('/', authMiddleware,upload.array('image',7),productValidator, createProduct);
productRouter.get('/showProduct', authMiddleware, showProduct);
export default productRouter;