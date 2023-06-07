import IProduct from '../interfaces/Product';

const mapProducts = (list: IProduct[]) => {
  const mappedResults = list.map((result) => {
    const obj = {
      id: result.id,
      title: result.title,
      condition: result.condition,
      permalink: result.permalink,
      site_id: result.site_id,
      category_id: result.category_id,
      thumbnail: result.thumbnail,
      currency_id: result.currency_id,
      order_backend: result.order_backend,
      price: result.price,
      sold_quantity: result.sold_quantity,
      available_quantity: result.available_quantity,
      accepts_mercadopago: result.accepts_mercadopago,
      tags: result.tags,
      seller: result.seller,
    };

    return obj;
  });

  return mappedResults;
};

export default mapProducts;