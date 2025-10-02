'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation"  
import React, { use } from 'react'

const Filter = () => {

   const searchParams = useSearchParams()
   const selectedCategory = searchParams.get('category')
   const router = useRouter()
   const pathname = usePathname()
   
   const onchangeCategory = (category: string) => {
      const params = new URLSearchParams(searchParams)
      params.set('sort', category || 'all')
      router.push(`${pathname}?${params.toString()}`, {scroll: false})
   }

   return (
      <div className='flex items-center justify-end gap-4 my-6 text-gray-500'>
         <span>Sort by</span>
         <select
            name="sort"
            id=""
            className='ring ring-gray-300 rounded-md px-2 py-1 shadow-md'
            onChange={(e) => onchangeCategory(e.target.value)}
         >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="asc">Price : Low to high</option>
            <option value="desc">Price: High to Low</option>
         </select>
      </div>
   )
}

export default Filter