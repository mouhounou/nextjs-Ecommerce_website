import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className='mt-12 mb-4 flex flex-col items-center md:flex-row md:justify-between md:items-start p-8 text-white bg-gray-800 rounded-lg'>
      
      <div className='flex flex-col gap-4 items-center md:items-start'>
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
        <p>@2025 all right reserved</p>
        <p>Claudin</p>
      </div>

      <div className='flex flex-col gap-4 text-sm items-center md:items-start'>
        <p className='text-sm text-amber-50'>Links</p>
        <Link href={'/'}>Home</Link>
        <Link href={'/contact'}>Contact</Link>
        <Link href={'/privacy'}>Privacy Policy</Link>
      </div>

      <div className='flex flex-col gap-4 text-sm items-center md:items-start'>
        <p className='text-sm text-amber-50'>Links</p>
        <Link href={'/'}>Home</Link>
        <Link href={'/contact'}>Contact</Link>
        <Link href={'/privacy'}>Privacy Policy</Link>
      </div>

      <div className='flex flex-col gap-4 text-sm items-center md:items-start'>
        <p className='text-sm text-amber-50'>Links</p>
        <Link href={'/'}>Home</Link>
        <Link href={'/contact'}>Contact</Link>
        <Link href={'/privacy'}>Privacy Policy</Link>
      </div>

    </div>
  )
}

export default Footer