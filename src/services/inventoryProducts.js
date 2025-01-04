import { ProductsCollection } from '../bd/models/poducts.js';

export const getAllProducts = async () => {
  const products = await ProductsCollection.find();
  return products;
};

export const getProductById = async (productId) => {
  const product = await ProductsCollection.findById(productId);
  return product;
};

export const createProduct = async (payload) => {
  const product = await ProductsCollection.create(payload);
  return product;
};

export const deleteProduct = async (productId) => {
  const product = await ProductsCollection.findByIdAndDelete({
    _id: productId,
  });
  return product;
};

export const updateProduct = async (productId, payload, options = {}) => {
  const rawResult = await ProductsCollection.findByIdAndUpdate(
    { _id: productId },
    payload,
    { new: true, includeResultMetadata: true, ...options },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    product: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
