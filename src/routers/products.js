import { Router } from 'express';
import {
  getProductByIdController,
  getProductsController,
  createProductController,
  deleteProductController,
  patchProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createProductSchema,
  updateProductSchema,
} from '../validation/products.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/', ctrlWrapper(getProductsController));

router.get('/:productId', isValidId, ctrlWrapper(getProductByIdController));

router.post(
  '/register',
  validateBody(createProductSchema),
  ctrlWrapper(createProductController),
);

router.delete('/:productId', ctrlWrapper(deleteProductController));

router.patch(
  '/:productId',
  validateBody(updateProductSchema),
  ctrlWrapper(patchProductController),
);

export default router;
