import { Phone } from "lucide-react";
import z from "zod";

export type ProductType = {
   id: string | number;
   name: string;
   shortDescription: string;
   description: string;
   price: number;
   sizes: string[];
   colors: string[];
   images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
   quantity: number;
   selectedSize: string;
   selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
   name: z.string().min(2, "Name must be at least 2 characters"),
   email: z.string().email("Invalid email address"),
   phone: z
      .string()
      .min(7, "Phone number must be between 7 and 10 digits")
      .max(10, "Phone number must be between 7 and 10 digits")
      .regex(/^\d+$/, "Phone number must contain only digits"),

   city: z
      .string()
      .min(2, "City must be at least 2 characters"),
   address : z.string().min(1, "Address is required"),
})

export type shippingFormInput = z.infer<typeof shippingFormSchema>;

export const paiementFormSchema = z.object({
   cardHolder: z.string().min(2, "CardHolder is required"),
   cardNumber: z.string().min(16, "Card number is required").max(16, "Card number is required"),
   expirationDate: z
      .string()
      .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiration date must be in MM/YY format"),
   cvv: z.string().min(3, "CVV is required").max(4, "CVV is required"),
})

export type paiementFormInput = z.infer<typeof paiementFormSchema>;


export type cartStoreStateType = { 
   cart: CartItemsType,
   hashadreted:boolean
}

export type cartStoreActionsType = {
   addToCart: (product:CartItemType) => void,
   removeFromCart: (product:CartItemType) => void,
   clearCart: () => void,
}

