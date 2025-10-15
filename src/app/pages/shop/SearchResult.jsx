import { AllProducts, Banner, Container } from '@/components'

import React from 'react'

export default function SearchResult() {
  return (
    <div>
      
      <Banner varient="noImage"
        heading='search result for'
        title='neon green tshirt'
      />

      <section>
        <Container>

          <AllProducts />

        </Container>
      </section>

    </div>
  )
}
