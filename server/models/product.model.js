import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      minLength: [6, "Product name must be at lease 3 characters"],
      maxLength: [100, "Product name must be less than 100 characters"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Product must be greater than 0"],
    },
    image: {
      type: String,
      required: [true, "Product URL is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  },
);

productSchema.index({ name: 1 });

const productModel = mongoose.model("Product", productSchema);

export default productModel;
