import { Button, Divider, SplitButton } from '@/components';
import { Link } from 'react-router';

export default function TotalPriceCard() {
  return (
    <div>
      <div className='mb-4'>
        <p className='text-sm mb-2'>Have discount Code? Apply here</p>
        <SplitButton
          label='Coupen Code'
          inputId='coupenCode'
          inputType='text' >
            Apply
          </SplitButton>
      </div>

      <div className=' rounded-2xl '>
        <div className='flex justify-between p-4'>
          <div>
            <p>Subtotal</p>
            <p>Shipping Costs</p>
            <p>Discount</p>
          </div>
          <div className='text-right'>
            <p>$1000.99</p>
            <p>$100.99</p>
            <p>-$200.99</p>
          </div>
        </div>
        <Divider />

        <div className='p-4'>
          <div className='text-l2 flex justify-between'>
            <div >Total</div>
            <div>$200.99</div>
          </div>

          <Button>Continue to Payment</Button>
        </div>

      </div>
      <p className='text-s1 mt-1'>
        By continuing, I confirm that I have read and accept the
        <span className='underline'>
          <Link to={{ pathname: '/terms' }}>Terms and Conditions</Link></span> and the
        <span className='underline'>
          <Link to={{ pathname: '/privacy' }}>Privacy Policy</Link>
        </span>.
      </p>
    </div>
  )
}
