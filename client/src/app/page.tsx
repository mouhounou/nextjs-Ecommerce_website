import Image from "next/image"
import ProductList from "./components/ProductList"

const Homepage = async ({ searchParams }: { searchParams?: { category?: string } }) => {
  const category = searchParams?.category

  return ( 
    <div>
      <div className="relative aspect-[3/1] mb-12">
        <Image
          src="/featured.png"
          alt="Featured Image"
          fill
        />
      </div>
      <ProductList category={category} params="homepage"/>
    </div>
  )
}

export default Homepage
