import { z } from "zod";

// Define the Zod schema for TVariant with custom error messages
const VariantZodSchema = z.object({
  type: z.string().min(1, "Variant type is required."),
  value: z.string().min(1, "Variant value is required."),
});

// Define the Zod schema for TInventory with custom error messages
const InventoryZodSchema = z.object({
  quantity: z.number().min(0, "Quantity must be a non-negative number."),
  inStock: z.boolean().refine((val) => val !== null, {
    message: "In-stock status is required.",
  }),
});

// Define the Zod schema for TProduct with custom error messages
const ProductZodSchema = z.object({
  name: z.string().min(1, "Product name is required."),
  description: z.string().min(1, "Product description is required."),
  price: z.number().positive("Price must be a positive number."),
  category: z.string().min(1, "Category is required."),
  tags: z
    .array(z.string().min(1, "Tags cannot be empty."))
    .nonempty("At least one tag is required."),
  variants: z
    .array(VariantZodSchema)
    .nonempty("At least one variant is required."),
  inventory: InventoryZodSchema,
});

// Export the Zod schemas
export default ProductZodSchema;
