import { AllProducts, Banner, CategoryGroup, Container, ProductGroup } from "@/components";

export default function OutletCategory() {
  return (

    <main className='flex flex-col gap-40'>
      <section>
        <div className='grid gap-8-16'>
          <Banner
            heading='Men'
            title={`Men's outlet`}
            tagline='Upperwear, lowerwear, sneakers, cap, bags' />
          <Banner
            varient='sub'
            title='carosal here'
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

      <section >
        <Container>
          <CategoryGroup
            varient={'main'}
            title='Nav Category - test'
            categories={[
              { name: "category1", imgLink: '/.temp/images/category.jpg' },
              { name: "category2", imgLink: '/.temp/images/category.jpg' },
              { name: "category3", imgLink: '/.temp/images/category.jpg' },
              { name: "category4", imgLink: '/.temp/images/category.jpg' },
            ]}
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
