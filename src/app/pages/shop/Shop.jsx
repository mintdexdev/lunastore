import { Banner, CategoryGroup, Container, ProductGroup } from '@/components'
import React from 'react'

export default function Shop() {
  return (
    <div className='flex flex-col gap-20'>
      <Banner
        title='Buy all you want'
        tagline='Everything you need, Everything you want' />



      <section>
        <Container className='gap-inside-section' >

          <ProductGroup
            varient="latest"
            cardVarient='embedded'
            title="Latest Release. Take a look at what's new right now."
          />
          <ProductGroup
            type='full'
            exploreBtn
            title="Deals of the month. special discounted products."
            exploreText='deals'
          />
          <ProductGroup
            type='full'
            title="Trending this month. see what people love."
          />

        </Container>
      </section>

      <section >
        <Container className='gap-inside-section' >

          <CategoryGroup title='All Categories - test' />
          <CategoryGroup title='Collection - test' />

        </Container>
      </section>

      <section>
        <Container >
          <div className='flex flex-col gap-2'>
            <Banner
              title='test Banner'
              tagline='Everything you need, Everything you want'
              className='rounded-md overflow-clip' />
            <Banner
              title='test Banner2'
              tagline='Everything you need, Everything you want2'
              className='rounded-md overflow-clip' />

          </div>

        </Container>
      </section>

      <section>
        <Container className='gap-inside-section' >

          <ProductGroup
            exploreBtn

            title="T-shirt"
            exploreText='Tshirt'
          />
          <ProductGroup
            exploreBtn

            title="Pants"
            exploreText='Pants'
          />
          <ProductGroup
            exploreBtn

            title="Shoes"
            exploreText='Shoes'
          />

        </Container>
      </section>


    </div>
  )
}
