// /shop/:categoryid
import { AllProducts, Banner, Container, ProductGroup } from '@/components';
import { Navigate, useParams } from 'react-router';

const categories = [
  { 'id': '1', 'name': 'T-Shirt', 'slug': 't-shirt' },
]

const CategoryData = {
  id: '1',
  name: 'T-Shirt',
  slug: 't-shirt',
  allProduct: ['p1', 'p2', 'p3'],
  latestProduct: ['p1', 'p2', 'p3'],
  trendingProduct: ['p1', 'p2', 'p3'],
}

export default function Category() {
  const { categorySlug } = useParams();

  // Find category by slug
  const category = categories.find(c => c.slug === categorySlug);

  if (!category) return <Navigate to='/shop' replace />;

  return (
    <main className='flex flex-col gap-40'>
      <section>
        <div className='grid gap-6'>
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

      <section>
        <Container>

          <AllProducts />

        </Container>
      </section>
    </main>
  )
}