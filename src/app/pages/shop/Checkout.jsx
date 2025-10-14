import { Banner, Container, Divider, ProductCard, TextField, TotalPriceCard } from '@/components'
import React from 'react'

export default function Checkout() {
  return (
    <div className=''>
      <Banner
        varient='noImage'
        heading="checkout"
        title="Details Filling"
      />
      <section>
        <Container className='flex gap-6'>

          <div className='w-8/12'>

            <div className='max-w-[960px] mx-auto'>
              <div className="flex flex-col gap-4">
                <h2 className="text-l3">Contact Details</h2>

                <div className='flex gap-4 w-full'>
                  <TextField label='First Name' />
                  <TextField label='Last Name' />
                </div>
                <div className='flex gap-4 w-full'>
                  <TextField label='Mobile Number' />
                  <TextField label='Alternate Number' />
                </div>
                <TextField label='Email Address' />
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-l3">Delivery Address</h2>

                <div className='flex gap-4 w-full'>
                  <TextField label='Pin Code' />
                  <TextField label='Last Name' />
                </div>
                <div className='flex gap-4 w-full'>
                  <TextField label='Mobile Number' />
                  <TextField label='Alternate Number' />
                </div>
                <TextField label='Email Address' />
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-l3">Billing Address</h2>

                <div className='flex gap-4 w-full'>
                  <TextField label='First Name' />
                  <TextField label='Last Name' />
                </div>
                <div className='flex gap-4 w-full'>
                  <TextField label='Mobile Number' />
                  <TextField label='Alternate Number' />
                </div>
                <TextField label='Email Address' />
              </div>
            </div>

          </div>

          <div className='w-4/12'>

            <h2 className="text-l3">Review your Order</h2>

            <div className='grid gap-4 my-8'>
              <ProductCard varient='checkout' />
              <ProductCard varient='checkout' />
              <ProductCard varient='checkout' />
            </div>

            <TotalPriceCard />
          </div>

        </Container>
      </section>
    </div>
  )
}
