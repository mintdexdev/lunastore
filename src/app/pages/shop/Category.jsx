// /shop/:categoryid
import { AllProducts, Banner, Container, ProductGroup } from "@/components";
import { Navigate, useParams } from "react-router";

const categories = [
  { "id": "1", "name": "T-Shirt", "slug": "t-shirt" },
]

const CategoryData = {
  id: "1",
  name: "T-Shirt",
  slug: "t-shirt",
  allProduct: ["p1", "p2", "p3"],
  latestProduct: ["p1", "p2", "p3"],
  trendingProduct: ["p1", "p2", "p3"],
}


export default function Category() {
  const { categorySlug } = useParams();

  // Find category by slug
  const category = categories.find(c => c.slug === categorySlug);

  if (!category) return <Navigate to="/shop" replace />;

  return (

    <div className='flex flex-col gap-20'>
      <Banner
        heading="Category"
        title='T-shirts'
        tagline='Everything you need, Oversized, Polo, Fit, etc ' />



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
        <Container>

          <AllProducts />

        </Container>
      </section>

    </div>
  )
}