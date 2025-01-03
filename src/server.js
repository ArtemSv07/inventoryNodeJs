import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { env } from './utils/env.js';
import {
  getAllProducts,
  getProductById,
} from './services/inventoryProducts.js';

const PORT = Number(env('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World!',
    });
  });

  app.get('/products', async (req, res) => {
    const products = await getAllProducts();

    res.status(200).json({
      data: products,
    });
  });

  app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;
    const product = await getProductById(productId);

    if (!product) {
      res.status(404).json({
        message: 'Product not found',
      });
      return;
    }

    res.status(200).json({
      data: product,
    });
  });

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
