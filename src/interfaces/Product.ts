import ISeller from './Seller';

interface IProduct {
  id: string,
  title: string,
  condition: string,
  permalink: string,
  site_id: string,
  category_id: string,
  thumbnail: string,
  currency_id: string,
  order_backend: number,
  price: number,
  sold_quantity: number,
  available_quantity: number,
  accepts_mercadopago: boolean,
  tags: string[],
  seller: ISeller,
}

export default IProduct;