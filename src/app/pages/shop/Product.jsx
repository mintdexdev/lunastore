import { AllProducts, Banner, Chips, Container, Divider } from '@/components';

const product = {
  sku: 'URB-TSH-001',
  slug: 'plain-cotton',
  brand: 'Luna',
  category: 'tshirt',
  price: 899,
  discount: 50,
  rating: 4.6,
  stock: true,

  name: 'Plain Cotton',
  options: {
    colors: ['Blue', 'Black', 'White'],
    sizes: ['S', 'M', 'L', 'XL'],
    // refLink: 'size color reference'
  },
  images: [
    '/.temp/images/product.jpg',
    '/.temp/images/product.jpg',
    '/.temp/images/product.jpg',
  ],
  description: 'A soft, breathable cotton t-shirt designed for everyday comfort and style. Perfect for layering or casual wear.',
  details: {
    fit: 'Oversize',
    material: '100% Cotton',
    otherDetails: 'something',
    otherDetails2: 'something2',
  },
  allDetails: {
    type: 'Overized Cotten T-Shirt',
    gender: 'Unisex',
    sleeve: 'Half Sleeve',
    neck: 'Round Neck',
    materialCare: 'Machine wash cold with similar colors. Do not bleach.',
    weight: '300 g',
    pattern: 'Plain',
    origin: 'India',
    packageContent: '1 T-Shirt',
  }

};


export default function Product() {
  return (
    <main className='flex flex-col gap-40'>
      <Banner
        heading={product.category}
        title={product.name}
      />

      <section>
        <Container>
          <div className='flex gap-6'>

            <div className='w-1/2'>

              <div className='flex gap-4 overflow-clip '>
                {[1, 2].map(item => (
                  <div className='rounded-2xl shrink-0 overflow-clip w-3/4 aspect-[3/4]  '>
                    <img className='w-full h-full object-cover' src={product.images[0]} alt='' />
                  </div>
                ))}
              </div>

              <div className='grid grid-cols-6 gap-2 mt-4 '>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                  <div className='rounded-lg overflow-clip aspect-[3/4]'>
                    <img className='w-full h-full object-cover' src={product.images[0]} alt='' />
                  </div>
                ))}
              </div>

            </div>

            <div className='w-1/2 flex flex-col gap-8'>

              <div className='flex gap-4 items-center'>
                <div className='flex gap-4 items-center'>
                  <h2 className='text-l1'>$199.99</h2>
                  <p className='text-helper2 line-through'>$249</p>
                  <p className='text-c-4'>50% Off</p>
                </div>
                <div className='flex gap-4'>
                  <div>Add to wishlist</div>
                  <div>Add to cart</div>
                </div>
              </div>

              <div>
                <h3 className='text-l2'>Options</h3>
                <div className='bg-primary-a rounded-2xl mt-2'>
                  <div className='px-4 py-2'>
                    <h4>Color</h4>
                  </div>
                  <Divider />
                  <div className='flex gap-2 p-4'>
                    {['blue', 'red', 'pink'].map(item => (
                      <div className='bg-neutral-600 w-20 aspect-[3/4] rounded-lg'
                        key={item}>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='bg-primary-a rounded-2xl mt-2'>
                  <div className='px-4 py-2'>
                    <h4>Size</h4>
                  </div>
                  <Divider />
                  <div className='flex gap-2 p-4'>
                    {['sm', 'medium', 'large'].map(item => (
                      <Chips key={item} text={item} />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-l2'>Description</h3>
                <div className='mt-2 p-4 bg-primary-a rounded-2xl'>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nostrum tenetur dignissimos dolor, aut porro labore ea quae dolorum non assumenda at saepe quisquam, dolore aspernatur eveniet, mollitia ratione! Cumque ipsam nulla, sit, dignissimos doloribus cupiditate sed et in consectetur id consequatur neque dolore, delectus laborum maiores earum iusto nostrum.</p>
                </div>
              </div>

              <div>
                <h3 className='text-l2'>Details</h3>
                <div className='mt-2 p-4 bg-primary-a rounded-2xl'>
                  {Object.entries(product.details).map(arr => (
                    <div className='flex border-b px-4 py-1'
                      key={arr[0]}>
                      <div className='w-1/2'>{arr[0]}</div>
                      <div className='w-1/2'>{arr[1]}</div>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>
        </Container>
      </section >

      <section>
        <Container>

          <h2 className='text-l4'>Additional Details</h2>
          <div className='flex gap-6'>
            <div className='w-1/2 bg-primary-a p-4 rounded-2xl'>

              <h3 className='text-l2'>Alldetails</h3>
              {Object.entries(product.allDetails).map(arr => (
                <div className='flex border-b px-4 py-1'
                  key={arr[0]}>
                  <div className='w-1/2'>{arr[0]}</div>
                  <div className='w-1/2'>{arr[1]}</div>
                </div>
              ))}
            </div>

            <div className='w-1/2'>
              <div className='bg-primary-a p-4 rounded-2xl'>
                <h3 className='text-l2'>Shipping  and return</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro earum minus consequuntur aliquid quaerat suscipit possimus, dolores iure ad inventore.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro earum minus consequuntur aliquid quaerat suscipit possimus, dolores iure ad inventore.</p>
              </div>
              <div className='bg-primary-a p-4 rounded-2xl mt-6'>
                <h3 className='text-l2'>Manfacture's address</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro earum minus consequuntur aliquid quaerat suscipit possimus, dolores iure ad inventore.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro earum minus consequuntur aliquid quaerat suscipit possimus, dolores iure ad inventore.</p>
              </div>
            </div>
          </div>

        </Container>
      </section>

      <section>
        <Container>
          <h2 className='text-l4 mb-8'>You might like</h2>
          <AllProducts />
        </Container>
      </section>
    </main>
  );
}
