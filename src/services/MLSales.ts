import axios from 'axios';
import IUser from '../interfaces/User';

const token = process.env.ACCESS_TOKEN;

const axiosConfig = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

class MLUser {
  static async findSalesByOrderId(orderId: string): Promise<IUser> {
    try {
      const url = `
      https://api.mercadolibre.com/orders/${orderId}
      `;
      const response = await axios.get(url, axiosConfig);
      return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default MLUser;