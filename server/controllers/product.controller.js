import mongoose from "mongoose";
import { getProductsService, createProductService, updateProductService, deleteProductService } from "../services/product.service.js";

const getProducts = async (req, res, next) => {
    try {
        const products = await getProductsService();

        if (!products || products.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No products found"
            });
        }

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });

    } catch (error) {
        next(error);
    }
};

const createProduct = async (req, res, next) => {
    try {
        const { name, price, image } = req.body;

        const newProduct = await createProductService(name, price, image);

        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        next(error);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const { name, price, image } = req.body;
        const { id } = req.params;

        // to check if the id format is not correct
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: "Id format is not correct" });
        }

        if (!name || !price || !image) {
            return res.status(404).json({ success: false, message: "The 3 fields are required" });
        }

        const editedProduct = await updateProductService(id, name, price, image);

        if (!editedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({ success: true, data: editedProduct });
    } catch (error) {
        next(error);
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid product ID format"
            });
        }

        const deletedProduct = await deleteProductService(id);

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });

    } catch (error) {
        next(error);
    }
};

export { getProducts, createProduct, updateProduct, deleteProduct };