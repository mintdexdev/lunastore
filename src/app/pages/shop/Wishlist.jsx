import { AllProducts, Banner, Container } from '@/components';

export default function Wishlist() {
  return (
    <main >
      <Banner
        varient='noImage'
        heading='wishlist'
        title='Buy all you want'
        tagline='Everything you need, Everything you want' />
      <section>
        <Container>

          <AllProducts cardVarient="wishlist" />

        </Container>
      </section>
    </main>
  )
}