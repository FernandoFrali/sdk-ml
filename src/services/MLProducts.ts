import axios from 'axios';
import IProduct from '../interfaces/Product';
import mapProducts from '../DTO/dtoProducts';

type ProductUpdateData = Pick<IProduct, 'status' | 'price' | 'title'>;
const token = process.env.ACCESS_TOKEN;

const axiosConfig = {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

class MLProducts {
  static async findAllProducts(url: string): Promise<IProduct[]> {
    try {
      const response = await axios
        .get(url);
      const { results } = response.data;

      return mapProducts(results.slice(0, 10));
    } catch (error) {
      throw new Error(error as string);
    }
  }

  // eslint-disable-next-line max-len
  static async editProductById(itemId: string, body: ProductUpdateData): Promise<IProduct> {
    try {
      const response = await axios
        .put(`https://api.mercadolibre.com/items/${itemId}`, body, axiosConfig);
      const { result } = response.data;

      return result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default MLProducts;