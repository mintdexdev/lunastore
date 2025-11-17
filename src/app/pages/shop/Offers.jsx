import { AllProducts, Banner, Container, ProductGroup } from '@/components'
import React from 'react'

export default function Offers() {
  return (
    <main className='flex flex-col gap-40'>

      <section>
        <div className='grid gap-8-16'>
          <Banner
            heading='Men'
            title={`Banner Title`}
            tagline='Upperwear, lowerwear, sneakers, cap, bags' />
          <Banner
            varient='sub'
            title='Carousal Banner Title'
            tagline='tagline-here'
          />
        </div>
      </section>

      <section>
        <Container className='grid gap-20' >

          <ProductGroup
            varient='latest'
            cardVarient='embedded'
            title='New Releases. take a look'
          />
          <ProductGroup
            title='Special deals on Products.'
            TrailingLink
            TrailingLinkText='Explore all deals'
          />
          <ProductGroup
            title='Trending Products. See what others love.'
          />

        </Container>
      </section>


      <section>
        <Container>

          <AllProducts />

        </Container>
      </section>

      <section>
        <Container variant='noPadding' >
          <div className='grid gap-8-16'>
            <Banner
              varient='sub'
              title='old Collection banner '
              tagline='tagline-here'
            />
            <Banner
              varient='sub'
              title='old Collection banner 2s'
              tagline='tagline-here'
            />
          </div>
        </Container>
      </section>
    </main>
  )
}
