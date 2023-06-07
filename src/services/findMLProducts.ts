import axios from 'axios';
import IProduct from '../interfaces/Product';
import mapProducts from '../DTO/dtoProducts';

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
}

export default MLProducts;