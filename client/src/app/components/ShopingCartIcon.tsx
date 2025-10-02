'use client'

import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import useCartStore from "../cartStore"


function ShopingCartIcon() {

   const {cart, hashadreted} = useCartStore()

   if (!hashadreted) return null
   
   return (
      <div>
         <Link href={'/cart'} className="relative">
            <ShoppingCart className='w-4 h-4 text-gray-700' />
            <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-700 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium ">
               {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
         </Link>
      </div>
   )
}

export default ShopingCartIcon