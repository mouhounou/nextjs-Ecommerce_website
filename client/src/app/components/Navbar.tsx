import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import { Bell, Home, ShoppingCart } from 'lucide-react'
import ShopingCartIcon from './ShopingCartIcon'

function Navbar() {
   return (
      <div className='w-full flex justify-between items-center  border-b border-b-gray-300 pb-2'>
         {/* left */}
         <Link
            href={'/'}
            className='flex items-center'
         >
            <Image
               src={'/logo.png'}
               alt='logo'
               width={36}
               height={36}
               className='w-6 h-6 md:w-9 md:h-9'
            />
            <p className='hidden md:inline font-bold text-lg tracking-wide'>
               TRENDLAMA
            </p>
         </Link>


         {/* Right */}
         <div className='flex items-center gap-6'>
            <SearchBar/>
            <Link href={'/'}>
               <Home className='w-4 h-4 text-gray-700'/>
            </Link>
            <Link href={'/'}>
               <Bell className='w-4 h-4 text-gray-700'/>
            </Link>
            <ShopingCartIcon/>
            <Link
               href={'/'}
               className='text-gray-700 font-semibold'
            >
               Sign In
            </Link>
         </div>
         {/* Right */}
      </div>
   )
}

export default Navbar