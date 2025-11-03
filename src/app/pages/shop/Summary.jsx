import { Banner, Button, Container, ProductCard } from '@/components';
import { Link } from 'react-router';

export default function Summary() {
  return (
    <div>
      <Banner
        varient='noImage'
        heading='summary'
        title='Summary of Order'
      />
      <section>
        <Container>
          <div className='w-fit mx-auto'>

            <div className='flex gap-4'>
              <div className='w-20 h-20 bg-c-5 rounded-full'></div>

              <div>
                <p className='text-l2'>$2000 Paid</p>
                <p>Your Payment is successful</p>
              </div>

            </div>

            <div className='text-center'>
              <p>Please check the delivery statusat <span className='underline'><Link to={{ pathname: '/track-order' }}>Order Tracking page</Link></span></p>
              <Button className='bg-tertiary w-fit px-16 mt-2'>Continue Shopping</Button>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className='flex gap-6 my-20'>

          <div className='w-1/2 '>
            <h2 className='text-l3'>Transaction Details</h2>

            <div className='p-6 rounded-3xl bg-primary-a'>
              <div className='grid gap-2'>
                <div>TransactionId</div>
                <div>SomeId</div>
                <div>Something</div>
              </div>

              <div className='grid gap-2'>
                <div>1234567890</div>
                <div>1234567890</div>
                <div>Some thing</div>
              </div>

            </div>
          </div>

          <div className='w-1/2'>
            <h2 className='text-l3'>Ordered Product</h2>

            <div className='grid gap-4 my-8'>
              <ProductCard varient='checkout' />
              <ProductCard varient='checkout' />
              <ProductCard varient='checkout' />
            </div>

          </div>
        </Container>
      </section>
      
    </div>
  )
}
