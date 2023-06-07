import axios from 'axios';

const fetchProducts = async () => {
  try {
    const response = await axios
      .get('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    const az = response.data.results;
    return az.slice(0, 10);
  } catch (error) {
    console.log(error);
  }
};

export default fetchProducts;
