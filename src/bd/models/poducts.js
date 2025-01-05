import { model, Schema } from 'mongoose';

const productsSchema = new Schema(
  {
    serialNumber: {
      type: String,
      required: true,
    },
    isNew: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    specification: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ProductsCollection = model('products', productsSchema);
