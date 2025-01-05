import { Router } from 'express';
import {
  getProductByIdController,
  getProductsController,
  createProductController,
  deleteProductController,
  patchProductController,
} from '../controllers/products.js';
import {
  createProductSchema,
  updateProductSchema,
} from '../validation/products.js';
import { validateBody } from '../middlewares/validateBody.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/products', ctrlWrapper(getProductsController));
router.get('/products/:productId', ctrlWrapper(getProductByIdController));
router.post(
  '/products',
  validateBody(createProductSchema),
  ctrlWrapper(createProductController),
);
router.delete('/products/:productId', ctrlWrapper(deleteProductController));
router.patch(
  '/products/:productId',
  validateBody(updateProductSchema),
  ctrlWrapper(patchProductController),
);

export default router;
