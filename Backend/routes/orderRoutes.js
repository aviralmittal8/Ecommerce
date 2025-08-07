import express from 'express';
const orderRouter = express.Router();

import { addOrderItems, getOrderById } from '../controllers/orderController.js';
import { protect as protectOrder } from '../middleware/authMiddleware.js';

orderRouter.route('/').post(protectOrder, addOrderItems);
orderRouter.route('/:id').get(protectOrder, getOrderById);

export default orderRouter;
