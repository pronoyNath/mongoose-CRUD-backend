import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

const updateProductInDB = async (productId: string, productData: TProduct) => {
  const product = await ProductModel.findByIdAndUpdate(productId, productData, { new: true });
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

const deleteProductFromDB = async (id: string) => {
    const result = await ProductModel.updateOne({ _id: id },{isDeleted: true});
    return result;
  };

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductInDB,
  deleteProductFromDB
};
