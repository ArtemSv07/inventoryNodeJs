import { model, Schema } from 'mongoose';

const productsSchema = new Schema(
  {
    serialNumber: {
      type: Number,
      required: true,
    },
    isNew: {
      type: Number,
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
    guarantee: Object,
    price: Array,
    order: {
      type: Number,
    },
    date: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ProductsCollection = model('inventory', productsSchema);
