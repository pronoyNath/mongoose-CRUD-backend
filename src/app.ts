import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";
import { OrderRoutes } from "./app/modules/order/order.route";
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// applications routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

// testing server
app.get("/", (req: Request, res: Response) => {
  const a = "hello Ami Achi...";
  res.send(a);
});

export default app;
