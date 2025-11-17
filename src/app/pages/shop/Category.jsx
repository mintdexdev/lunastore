// /shop/:categoryid
import { AllProducts, Banner, Container, ProductGroup } from '@/components';
import { Navigate, useParams } from 'react-router';

const categoryData = [{
  id: '1',
  name: 'T-Shirt',
  slug: 'category-name',
  allProduct: ['p1', 'p2', 'p3'],
  latestProduct: ['p1', 'p2', 'p3'],
  trendingProduct: ['p1', 'p2', 'p3'],
}]

export default function Category() {
  const { categorySlug } = useParams();

  // Find category by slug
  const category = categoryData.find(c => c.slug === categorySlug);

  if (!category) return <Navigate to='/shop' replace />;

  return (
    <main className='flex flex-col gap-40'>
      <section>
        <div className='grid gap-8-16'>
          <Banner
            heading='Category'
            title='T-shirts'
            tagline='Everything you need, Oversized, Polo, Fit, etc ' />
          <Banner
            varient='sub'
            title='featured or new release carosal here'
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