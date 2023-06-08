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
    } catch (error) {
      throw new Error(error as string);
    }
  }
}

export default MLUser;