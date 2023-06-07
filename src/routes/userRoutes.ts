import express from 'express';
import MLUserController from '../controllers/userController';

const router = express.Router();

router.get('/:id', MLUserController.getUserById);

export default router;