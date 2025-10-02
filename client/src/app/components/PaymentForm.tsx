'use client'

import { paiementFormInput, paiementFormSchema} from '@/type'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams, useRouter } from 'next/navigation'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import Image from 'next/image'


function PaymentForm() {

  const { register, handleSubmit, formState: { errors } } = useForm<paiementFormInput>(
    {
      resolver: zodResolver(paiementFormSchema),
    }
  )

  const router = useRouter()

  const handlePaiementForm: SubmitHandler<paiementFormInput> = (data) => {
    console.log(data)
    router.push('/cart?step=3', {scroll: false})
  }


  return (
    <form
      onSubmit={handleSubmit(handlePaiementForm)}
      className='flex flex-col gap-4'
    >
      
      <div className='flex flex-col gap-1'>
        <label htmlFor="cardHolder" className='text-xs font-medium text-gray-500'>Name on card</label>
        <input
          className='border-b-2 border-gray-200 py-2 px-1 outline-none text-sm'
          type="text"
          id='name'
          placeholder='John Doe'
          {...register('cardHolder')}
        />
        {
          errors.cardHolder && <p className='text-xs text-red-500'>{errors.cardHolder.message}</p>
        }
      </div>
      
      <div className='flex flex-col gap-1'>
        <label htmlFor="cardNumber" className='text-xs font-medium text-gray-500'>Card number</label>
        <input
          className='border-b-2 border-gray-200 py-2 px-1 outline-none text-sm'
          type="text"
          id='cardNumber'
          placeholder='xxxx xxxx xxxx xxxx'
          {...register('cardNumber')}
        />
        {
          errors.cardNumber && <p className='text-xs text-red-500'>{errors.cardNumber.message}</p>
        }
      
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="expirationDate" className='text-xs font-medium text-gray-500'>Expiration Date</label>
        <input
          className='border-b-2 border-gray-200 py-2 px-1 outline-none text-sm'
          type="text"
          id='expirationDate'
          placeholder='MM/YY'
          {...register('expirationDate')}
        />
        {
          errors.expirationDate && <p className='text-xs text-red-500'>{errors.expirationDate.message}</p>
        }
      </div>
      
      <div className='flex flex-col gap-1'>
        <label htmlFor="cvv" className='text-xs font-medium text-gray-500'>CVV</label>
        <input
          className='border-b-2 border-gray-200 py-2 px-1 outline-none text-sm'
          type="text"
          id='cvv'
          placeholder='xxx'
          {...register('cvv')}
        />
        {
          errors.cvv && <p className='text-xs text-red-500'>{errors.cvv.message}</p>
        }
      </div>

      <div className='flex items-center gap-2'>
        <Image
          src={'/klarna.png'}
          alt='cards'
          width={50}
          height={25}
          className='rounded-md'
        />
        <Image
          src={'/cards.png'}
          alt='cards'
          width={50}
          height={25}
          className='rounded-md'
        />
        <Image
          src={'/stripe.png'}
          alt='stripe'
          width={50}
          height={25}
          className='rounded-md'
        />
      </div>
    
      <button
        type='submit'
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
      >
        Checkout
        <ShoppingCart className="w-3 h-3" />
      </button>
    </form>
  )
}

export default PaymentForm
