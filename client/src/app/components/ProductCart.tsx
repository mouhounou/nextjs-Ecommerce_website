'use client'

import { ProductType } from '@/type'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import useCartStore from '../cartStore'
import { toast } from 'react-toastify'

function ProductCart({ product }: { product: ProductType }) {
   
   const {addToCart} = useCartStore()

   const [productType, setProductType] = useState({
      size: product.sizes[0],
      color: product.colors[0]
   })

   const handleType = (type: 'size' | 'color', value: string) => { 
      setProductType(prev => ({
         ...prev,
         [type]: value
      }))
   }


   const handleCart = () => { 
      addToCart({
         ...product,
         quantity: 1,
         selectedSize: productType.size,
         selectedColor: productType.color
      })

      toast.success("Product added to cart")
   }

   return (
      <div className='shadow-lg rounded-lg overflow-hidden bg-[#f9f9f9]'>
         <Link href={`/products/${product.id}`}>
            <div className='relative aspect-square'>
               <Image
                  src={product.images[productType.color]} alt={product.name}
                  fill
                  className='object-contain p-4 hover:scale-105 transition-transform duration-300'
               />
            </div>
         </Link>

         {/* details */}

         <div className='flex flex-col p-4 gap-4 text-gray-700'>
            <h1 className='font-medium'>{product.name}</h1>
            <p className='text-sm'>{product.shortDescription}</p>

            <div className='flex items-center gap-4 text-sm'>
               <div className='flex flex-col gap-1'>
                  <span>Size</span>
                  <select
                     name="size"
                     className='ring ring-gray-300 rounded-md px-2 py-1'
                     onChange={(e) => handleType('size', e.target.value)}
                  >
                     {
                        product.sizes.map((size, item) =>(
                           <option key={item} value={size}>{size.toUpperCase()}</option>
                        ))
                     }
                  </select>
               </div>
               <div className='flex flex-col gap-1'>
                  <span>Color</span>
                  <div className='flex items-center gap-2'>
                     {
                        product.colors.map((color, item) => (
                           <div key={item} onClick={() => handleType('color', color)} className={`cursor-pointer p-0.5 rounded-full ring-1 ${productType.color === color ? 'ring-gray-700' : 'ring-transparent'}`}>
                              <div
                                 className=' h-5 w-5 rounded-full'
                                 style={{ backgroundColor: color }}
                              />
                           </div>
                        ))
                     }
                  </div>
               </div>
            </div>

            <div className='flex items-center justify-between'>
               <p className='font-medium'>${ product.price.toFixed(2)}</p>
               <button
                  onClick={handleCart}
                  className='flex items-center gap-2 ring ring-gray-300 cursor-pointer rounded-md px-4 py-2 hover:bg-black hover:text-white font-semi-bold transition-all duration-300 '
               >
                  <span>
                     <ShoppingCart className='w-4 h-4'/>
                  </span>
                  <span>Add to cart</span>
               </button>
            </div>
         </div>
      </div>
   )
}

export default ProductCart