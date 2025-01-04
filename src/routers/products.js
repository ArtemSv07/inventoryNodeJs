import { Router } from 'express';
import {
  getProductByIdController,
  getProductsController,
  createProductController,
  deleteProductController,
  putProductController,
} from '../controllers/products.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/products', ctrlWrapper(getProductsController));
router.get('/products/:productId', ctrlWrapper(getProductByIdController));
router.post('/products', ctrlWrapper(createProductController));
router.delete('/products/:productId', ctrlWrapper(deleteProductController));
router.put('/products/:productId', ctrlWrapper(putProductController));
export default router;
