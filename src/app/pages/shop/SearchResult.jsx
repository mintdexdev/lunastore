import { AllProducts, Banner, Container } from '@/components';

export default function SearchResult() {
  return (
    <main>

      <Banner varient='noImage'
        heading='search result for'
        title='neon green tshirt'
      />

      <section>
        <Container>

          <AllProducts />

        </Container>
      </section>

    </main>
  )
}
