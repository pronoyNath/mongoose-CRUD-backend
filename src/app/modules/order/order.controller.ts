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

    const product = await ProductModel.findById(zodParsedData.productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Check if the requested quantity is available
    if (zodParsedData.quantity > product.inventory.quantity) {
      return res.status(400).json({
        success: false,
        message: "Requested quantity exceeds available stock",
      });
    }

    // Decrease the product quantity
    product.inventory.quantity -= zodParsedData.quantity;

    // Update inStock status
    product.inventory.inStock = product.inventory.quantity > 0;

    // Save the updated product
    await product.save();

    // Call the service function to send this data
    const result = await OrderServices.createOrderIntoDB(zodParsedData);

    return res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string | undefined;
    const result = await OrderServices.getAllOrdersFromDB(email);

    let message = '';
    if (email) {
      message = result.length !== 0
        ? `Orders fetched successfully for user email!`
        : `No orders found for email: ${email}`;
    } else {
      message = result.length !== 0
        ? "Orders fetched successfully!"
        : "No orders found.";
    }

    res.status(200).json({
      success: true,
      message: message,
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

export const OrderController = {
  createOrder,
  getAllOrders,
};
