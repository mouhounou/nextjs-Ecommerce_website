import React from 'react'
import ProductList from '../components/ProductList'



const page =async ({ searchParams }: { searchParams?: { category?: string } }) => {
   const category = searchParams?.category
   return (
      <div>
         <ProductList category={category}  params='products'/>'
      </div>
   )
}

export default page