import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { TProduct } from "./product.interface";
import ProductZodSchema from "./product.validation";

// Define the createProduct function with proper typing
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData: TProduct = req.body;

    // Data validation using Zod
    const zodParsedData = ProductZodSchema.parse(productData);

    // Call the service function to send this data
    const result = await ProductServices.createProductIntoDB(zodParsedData);

    // Send response
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { query } = req;

    const result = await ProductServices.getAllProductFromDB(query);

    const isQueryEmpty = Object.keys(query).length === 0;

    res.status(200).json({
      success: true,
      message: isQueryEmpty
        ? "Products fetched successfully!"
        : `Products matching search term '${Object.values(query)}' fetched successfully!`,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      succuess: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      succuess: true,
      message: "Product is retrieve sucessfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      succuess: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;

    const zodParsedData = ProductZodSchema.parse(productData);

    const result = await ProductServices.updateProductInDB(
      productId,
      zodParsedData,
    );

    res.status(200).json({
      succuess: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      succuess: false,
      message: "Something went wrong",
      error: err.message || err,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.deleteProductFromDB(productId);

    res.status(200).json({
      succuess: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      succuess: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
