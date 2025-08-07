import express from 'express';
const productRouter = express.Router();

import { getProducts, getProductById } from '../controllers/productController.js';

productRouter.route('/').get(getProducts);
productRouter.route('/:id').get(getProductById);

export default productRouter;
