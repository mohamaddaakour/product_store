import { Router } from "express";

import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const productRoutes = Router();

productRoutes.get("/", getProducts);
productRoutes.post("/", createProduct);
productRoutes.put("/:id", updateProduct);
productRoutes.delete("/:id", deleteProduct);

export default productRoutes;