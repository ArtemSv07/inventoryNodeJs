import {
  getAllProducts,
  getProductById,
} from '../services/inventoryProducts.js';

export const getProductsController = async (req, res, next) => {
  const products = await getAllProducts();

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
    next(new Error('Product not found'));
    return;
  }

  res.json({
    status: 200,
    message: `Successfully found product with id ${productId}`,
    date: product,
  });
};
