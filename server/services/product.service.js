import productModel from "../models/product.model.js"

const getProductsService = async () => {
    const products = await productModel.find({});

    return products;
}

const createProductService = async (name, price, image) => {
    const newProduct = new productModel({ name, price, image });
    await newProduct.save();

    return newProduct;
}

const updateProductService = async (id, name, price, image) => {
    const editedProduct = await productModel.findByIdAndUpdate(id, { name, price, image }, { new: true, runValidators: true });
    return editedProduct;
}

const deleteProductService = async (id) => {
    const deletedProduct = await productModel.findByIdAndDelete(id);
    return deletedProduct;
}

export { getProductsService, createProductService, updateProductService, deleteProductService };