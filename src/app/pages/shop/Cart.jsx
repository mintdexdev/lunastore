import {
  Banner,
  Container,
  Divider,
  ProductCard,
  SplitButton,
  TotalPriceCard
} from '@/components';

export default function Cart() {
  return (
    <main>
      <Banner
        varient='noImage'
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
    </main>
  )
}
