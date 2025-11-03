import { Banner, CategoryGroup, Container, ProductGroup } from '@/components';

export default function Shop() {
  return (
    <div className='flex flex-col gap-40'>
      <Banner
        title='Buy all you want'
        tagline='Everything you need, Everything you want' />

      <section>
        <Container className='grid gap-20' >

          <ProductGroup
            varient='latest'
            cardVarient='embedded'
            title='Latest Release. Take a look at whats new right now.'
          />
          <ProductGroup
            type='full'
            exploreBtn
            title='Deals of the month. special discounted products.'
            exploreText='deals'
          />
          <ProductGroup
            type='full'
            title='Trending this month. see what people love.'
          />

        </Container>
      </section>

      <section >
        <Container className='grid gap-20' >

          <CategoryGroup title='All Categories - test' />
          <CategoryGroup title='Collection - test' />

        </Container>
      </section>

      <section>
        <Container >
          <div className='grid gap-2'>
            <Banner
              varient='h2'
              title='test Banner'
              tagline='Everything you need, Everything you want' />
            <Banner
              varient='h2'
              title='test Banner2'
              tagline='Everything you need, Everything you want2'
            />

          </div>

        </Container>
      </section>

      <section>
        <Container className='grip gap-20' >

          <ProductGroup
            cardVarient='category'
            exploreBtn

            title='T-shirt'
            exploreText='Tshirt'
          />
          <ProductGroup
            cardVarient='category'
            exploreBtn

            title='Pants'
            exploreText='Pants'
          />
          <ProductGroup
            cardVarient='category'
            exploreBtn

            title='Shoes'
            exploreText='Shoes'
          />

        </Container>
      </section>

    </div>
  )
}
