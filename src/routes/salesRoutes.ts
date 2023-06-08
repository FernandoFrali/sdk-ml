import express from 'express';
import MLSalesController from '../controllers/salesController';

const router = express.Router();

router.get('/:id', MLSalesController.getSalesByOrderId);

export default router;