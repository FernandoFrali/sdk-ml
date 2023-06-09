import { Response, Request } from 'express';
import MLProducts from '../services/MLProducts';

const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

class MLProductsController {
  static async getAllProducts(_req: Request, res: Response) {
    try {
      const products = await MLProducts
        .findAllProducts(URL);
  
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async editProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;

      const product = await MLProducts
        .editProductById(id, body);

      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default MLProductsController;