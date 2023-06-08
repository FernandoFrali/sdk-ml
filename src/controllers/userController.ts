import { Response, Request } from 'express';
import MLUser from '../services/MLUser';

class MLUserController {
  static async getUserById(req: Request, res: Response) {
    try {
      const { id: userId } = req.params;
      const user = await MLUser
        .findUser(userId);
        
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default MLUserController;