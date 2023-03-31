import { ProductData } from "./productRes.interface";

export interface CartSlice extends ProductData {
  selectedSize: string;
  oneQuantityPrice: number;
  quantity: number;
}

export interface RootState {
  cart: CartSlice[];
}
