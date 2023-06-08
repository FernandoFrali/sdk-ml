import { Response, Request } from 'express';
import MLSales from '../services/MLSales';

class MLSalesController {
  static async getSalesByOrderId(req: Request, res: Response) {
    try {
      const { id: orderId } = req.params;
      const user = await MLSales
        .findSalesByOrderId(orderId);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default MLSalesController;