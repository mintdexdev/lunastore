import { AllProducts, Container } from '@/components'

import React from 'react'

export default function SearchResult() {
  return (
    <div>
      <div className={`relative aspect-[4/1]  grid place-items-center `}>

        <div className='text-center '>
          <p className='text-sm uppercase'>Search result for</p>
          <h1 className='text-l7'>neon green tshirt</h1>
        </div>

      </div>

      <section>
        <Container>

          <AllProducts />

        </Container>
      </section>

    </div>
  )
}
