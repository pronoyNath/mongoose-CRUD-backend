import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { TProduct } from "./product.interface";
// import ProductZodSchema from "./product.validation";

// Define the createProduct function with proper typing
const createProduct = async (req: Request, res: Response) => {
    try {
        // Type assertion to ensure req.body is of type TProduct
        const productData: TProduct = req.body;

        // Data validation using Zod
        // const zodParsedData = ProductZodSchema.parse(productData);

        // Call the service function to send this data
        const result = await ProductServices.createProductIntoDB(productData);

        // Send response
        res.status(200).json({
            success: true,
            message: 'Product is created successfully',
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err,
        });
    }
};

export const ProductControllers = {
    createProduct
};
