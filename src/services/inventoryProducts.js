import { ProductsCollection } from '../bd/models/poducts.js';

export const getAllProducts = async () => {
  const products = await ProductsCollection.find();
  return products;
};

export const getProductById = async (productId) => {
  const product = await ProductsCollection.findById(productId);
  return product;
};
