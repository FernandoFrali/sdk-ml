import express from 'express';
import productsRoutes from './routes/productsRoutes';
import userRoutes from './routes/userRoutes';
import salesRoutes from './routes/salesRoutes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/user', userRoutes);
app.use('/sales', salesRoutes);

export default app;