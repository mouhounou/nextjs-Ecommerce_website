import { CartItemType, cartStoreActionsType, cartStoreStateType } from "@/type";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create<cartStoreStateType & cartStoreActionsType>()(
   persist(
      (set) => ({
         cart: [],
         hashadreted: false,
         addToCart: (product: CartItemType) =>
            set((state: any) => {
               
               const existingIndex = state.cart.findIndex(
                  (item: any) =>
                     item.id === product.id
                     &&
                     item.selectedSize === product.selectedSize
                     &&
                     item.selectedColor === product.selectedColor
               );

               if (existingIndex !== -1) {
                  const updateCart = [...state.cart]
                  updateCart[existingIndex].quantity += product.quantity || 1
                  
                  return {cart : updateCart}
               }
               return {
                  cart: [
                     ...state.cart,
                     {
                        ...product,
                        quantity: product.quantity || 1,
                        selectedColor: product.selectedColor,
                        selectedSize : product.selectedSize
                     }
                  ]
               }
            }),
         removeFromCart: (product) =>
         set((state) => ({
            cart: state.cart.filter(
               (p) =>
               !(
                  p.id === product.id &&
                  p.selectedSize === product.selectedSize &&
                  p.selectedColor === product.selectedColor
               )
            ),
         })),
         clearCart: () => set(() => ({ cart: [] })),
      }),
      {
         name: "cart",
         storage: createJSONStorage(() => localStorage),
         onRehydrateStorage: (state) => {
            
            if (state) {
               state.hashadreted = true
            }
         }
      }
   )
);

export default useCartStore;
