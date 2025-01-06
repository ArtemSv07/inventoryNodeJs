import createHttpError from 'http-errors';

import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} from '../services/inventoryProducts.js';

import { parsePaginationParams } from '../utils/parsePaginationParams.js';

export const getProductsController = async (req, res, next) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const products = await getAllProducts({
    page,
    perPage,
  });

  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController = async (req, res, next) => {
  const { productId } = req.params;
  const product = await getProductById(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  res.json({
    status: 200,
    message: `Successfully found product with id ${productId}`,
    date: product,
  });
};

export const createProductController = async (req, res) => {
  const product = await createProduct(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a product!`,
    data: product,
  });
};

export const deleteProductController = async (req, res, next) => {
  const { productId } = req.params;
  const product = await deleteProduct(productId);

  if (!product) {
    next(createHttpError(404, 'Product not found'));
    return;
  }

  res.status(204).send();
};

export const patchProductController = async (req, res, next) => {
  const { productId } = req.params;
  const result = await updateProduct(productId, req.body);

  if (!result) {
    next(createHttpError(404, 'Product not found'));
    return;
  }

  res.json({
    status: 200,
    message: 'Successfully patched a product!',
    data: result.product,
  });
};
