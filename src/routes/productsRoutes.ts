import express from 'express';
import MLProductsController from '../controllers/productsController';

const router = express.Router();

router.get('/', MLProductsController.getAllProducts);
router.put('/:id', MLProductsController.editProduct);

export default router;