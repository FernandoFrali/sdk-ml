import express from 'express';
import MLProductsController from '../controllers/productsController';

const router = express.Router();

router.get('/', MLProductsController.getAllProducts);

export default router;