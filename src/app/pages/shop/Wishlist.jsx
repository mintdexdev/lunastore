import { AllProducts, Banner, Container } from '@/components'

export default function Wishlist() {
  return (
    <div className='flex flex-col gap-20'>
      <Banner
        heading='wishlist'
        title='Buy all you want'
        tagline='Everything you need, Everything you want' />
      <section>
        <Container>

          <AllProducts cardVarient="wishlist" />

        </Container>
      </section>
    </div>
  )
}