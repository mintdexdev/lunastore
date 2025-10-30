import {
  Banner,
  Container,
  Divider,
  ProductCard,
  SplitButton,
  TotalPriceCard
} from '@/components'
import React from 'react'

export default function Cart() {
  return (
    <div className='flex flex-col gap-20'>
      <Banner
        heading='your cart'
        title='Got the best deals'
        tagline='ready to purchase' />
      <section>
        <Container className='flex gap-6'>

          <div className='w-8/12 grid gap-6'>
            <ProductCard varient='cart' />
            <Divider />
            <ProductCard varient='cart' />
            <Divider />
            <ProductCard varient='cart' />
            <Divider />
            <ProductCard varient='cart' />
          </div>

          <div className='w-4/12'>

            <TotalPriceCard />
          </div>

        </Container>
      </section>
    </div>
  )
}
