'use client'

import { shippingFormInput, shippingFormSchema } from '@/type'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams, useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'


function ShippingForm({setShippingForm} : {setShippingForm:(data: shippingFormInput) => void}) {

  const { register, handleSubmit, formState: { errors } } = useForm<shippingFormInput>(
    {
      resolver: zodResolver(shippingFormSchema),
    }
  )

  const router = useRouter()

  const handleShippingForm: SubmitHandler<shippingFormInput> = (data) => {
    console.log(data)
    setShippingForm(data)
    router.push('/cart?step=3', {scroll: false})
  }


  return (
    <form
      onSubmit={handleSubmit(handleShippingForm)}
      className='flex flex-col gap-4'
    >
      
      <div className='flex flex-col gap-1'>
        <label htmlFor="name" className='text-xs font-medium text-gray-500'>Name</label>
        <input
          className='border-b-2 border-gray-200 py-2 px-1 outline-none text-sm'
          type="text"
          id='name'
          placeholder='John Doe'
          {...register('name')}
        />
        {
          errors.name && <p className='text-xs text-red-500'>{errors.name.message}</p>
        }
      </div>
      
      
      <div className='flex flex-col gap-1'>
        <label htmlFor="mail" className='text-xs font-medium text-gray-500'>Email</label>
        <input
          className='border-b-2 border-gray-200 py-2 px-1 outline-none text-sm'
          type="text"
          id='mail'
          placeholder='John@gmail.com'
          {...register('email')}
        />
        {
          errors.email && <p className='text-xs text-red-500'>{errors.email.message}</p>
        }
      </div>
      
      <div className='flex flex-col gap-1'>
        <label htmlFor="name" className='text-xs font-medium text-gray-500'>Phone</label>
        <input
          className='border-b-2 border-gray-200 py-2 px-1 outline-none text-sm'
          type="text"
          id='phone'
          placeholder='00242 060766 64 00'
          {...register('phone')}
        />
        {
          errors.phone && <p className='text-xs text-red-500'>{errors.phone.message}</p>
        }
      </div>
      
      <div className='flex flex-col gap-1'>
        <label htmlFor="address" className='text-xs font-medium text-gray-500'>Address</label>
        <input
          className='border-b-2 border-gray-200 py-2 px-1 outline-none text-sm'
          type="text" 
          id='address'
          placeholder='Siafoumou'
          {...register('address')}
        />
        {
          errors.address && <p className='text-xs text-red-500'>{errors.address.message}</p>
        }
      </div>
      
      <div className='flex flex-col gap-1'>
        <label htmlFor="city" className='text-xs font-medium text-gray-500'>City</label>
        <input
          className='border-b-2 border-gray-200 py-2 px-1 outline-none text-sm'
          type="text"
          id='city'
          placeholder='Pointe Noire'
          {...register('city')}
        />
        {
          errors.city && <p className='text-xs text-red-500'>{errors.city.message}</p>
        }
      </div>


      <button
        type='submit'
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
      >
        Continue
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  )
}

export default ShippingForm