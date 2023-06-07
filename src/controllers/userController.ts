import { Response, Request } from 'express';
import userProduct from '../services/MLUser';

class MLUserController {
  static async getUserById(req: Request, res: Response) {
    try {
      const { id: userId } = req.params;
      const user = await userProduct
        .findUser(userId);
        
      return res.status(200).json(user);
    } catch (error) {
      console.log('error', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default MLUserController;