import { Request, Response } from "express";
import { TOrder } from "./order.interface";
import { OrderServices } from "./order.service";
import OrderZodSchema from "./order.validation";
import { ProductModel } from "../product/product.model";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData: TOrder = req.body;

    // Data validation using Zod
    const zodParsedData = OrderZodSchema.parse(orderData);

    // Check if the product exists
    const product = await ProductModel.findById(zodParsedData.productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Call the service function to send this data
    const result = await OrderServices.createOrderIntoDB(zodParsedData);

    // Send response
    res.status(200).json({
      success: true,
      message: "Order is created successfully",
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

export const OrderController = {
  createOrder,
};
