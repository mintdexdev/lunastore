import { Banner, CategoryGroup, Container, ProductGroup } from '@/components';

export default function Shop() {
  return (
    <div className='flex flex-col gap-40'>
      <section>
        <div className="grid gap-6">
          <Banner
            heading='Store'
            title={`Luna's Store`}
            tagline='Everything you need, Everything you want' />
          <Banner
            varient='sub'
            title='featured or new release carosal here'
            tagline='tagline-here'
          />
          <Banner
            varient='sub'
            title='featured Collection banner 2s'
            tagline='tagline-here'
          />
          <Banner
            varient='sub'
            title='featured Collection banner 2s'
            tagline='tagline-here'
          />
        </div>
      </section>

      <section >
        <Container className='grid gap-20' >
          <CategoryGroup title='Nav Category - test' />
        </Container>
      </section>

      <section>
        <Container className='grid gap-20' >

          <ProductGroup
            varient='latest'
            cardVarient='embedded'
            title='New Releases. take a look'
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

      <section>
        <Container variant='noPadding' >
          <div className='grid gap-2'>
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

    </div>
  )
}
