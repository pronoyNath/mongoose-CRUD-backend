import { QueryParams, TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductFromDB = async (query: QueryParams) => {
  try {
    // Build the search criteria based on the query parameters
    const searchCriteria: { [key: string]: any } = {};

    if (query.name) {
      searchCriteria.name = { $regex: query.name, $options: "i" };
    }

    if (query.category) {
      searchCriteria.category = { $regex: query.category, $options: "i" };
    }

    if (query.description) {
      searchCriteria.description = { $regex: query.description, $options: "i" };
    }

    // Fetch products from the database with the search criteria
    const products = await ProductModel.find(searchCriteria);

    return products;
  } catch (error: any) {
    throw new Error(error);
  }
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

const updateProductInDB = async (productId: string, productData: TProduct) => {
  const product = await ProductModel.findByIdAndUpdate(productId, productData, {
    new: true,
  });
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ _id: id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
};
