import { Button, Divider } from '.';

const CARD_CONSTANTS = {
  VARIANT: {
    DEFAULT: 'default',
    EMBEDDED: 'embedded',
    WISHLIST: 'wishlist',
    CART: 'cart',
    CHECKOUT: 'checkout',
    ORDERED: 'ordered'
  },

  LAYOUT: {
    GRID: 'grid',
    LIST: 'list'
  },
}

export default function ProductCard(
  {
    varient = CARD_CONSTANTS.VARIANT.DEFAULT,

    imgLink = '/.temp/images/product.jpg',
    category = 'T-shirt',
    title = 'Title of Product: Example title with a long name title',
    description = 'Demo Tagline for Product this will not be a short description instead of full description Example ...',
    price = '$199.99',
    originalPrice = '$249.99',
    discountAmount = '25'
  }
) {

  if (varient === CARD_CONSTANTS.VARIANT.EMBEDDED) {
    return (
      <div className='relative p-6 aspect-[3/4] text-primary'>

        <div className='absolute inset-0 -z-[1] rounded-4xl overflow-clip'>
          <img className='w-full h-full' src={imgLink} alt={title} />
        </div>


        <div className='flex flex-col gap-2 overflow-clip'>
          <h3 className='text-l1 whitespace-nowrap'>{title}</h3>
          <p className='text-neutral-b '>{description}</p>
          <p className='text-l1'>{price}</p>
        </div>
      </div>
    )
  }

  if (varient === CARD_CONSTANTS.VARIANT.WISHLIST) {
    return (
      <div>
        <div className='relative p-2 aspect-[3/4] '>
          <div className='absolute inset-0 -z-[1] rounded-4xl overflow-clip'>
            <img className='w-full h-full ' src={imgLink} alt={title} />
          </div>
          <div className='ml-auto w-12 h-12 rounded-full overflow-clip'>
            <div className='w-full h-full bg-primary grid place-items-center'>*-*</div>
          </div>
        </div>

        <div className='flex flex-col gap-2 mt-2'>
          <div>
            <p>{category}</p>
            <div className='h-[1px] bg-neutral-c' />
          </div>
          <h3 className='text-l1'>{title}</h3>
          <p className='text-neutral-b '>{description}</p>
          <div className='flex gap-4 items-center'>
            <p className='text-l1'>{price}</p>
            <p className='text-neutral-b line-through'>{originalPrice}</p>
            <p className='text-c-error'>{discountAmount}% Off</p>
          </div>
        </div>
      </div>
    )
  }

  if (varient === CARD_CONSTANTS.VARIANT.CART) {
    return (
      <div className='flex gap-4'>
        <div className='w-1/4 aspect-[3/4] rounded-4xl overflow-clip'>
          <img className='w-full h-full object-cover' src={imgLink} alt={title} />
        </div>

        <div>

          <div className='flex'>
            <h3 className='text-l2 w-full'>{title}</h3>

            {discountAmount == '0' ?
              <p className='text-l2'>{price}</p> :
              <div className='w-fit text-right'>
                <p className='text-l2'>{price}</p>
                <p className='text-neutral-b line-through'>{originalPrice}</p>
                <p className='text-c-error'>{discountAmount}% Off</p>
              </div>
            }
          </div>

          <div className='mt-3 flex'>

            <div className='mt-1 w-full'>
              <p className='text-sm'>{category}</p>
              <div className='text-neutral-b'>
                <p>Size: UK 9</p>
                <p>Color: Blue</p>
                <p>Exttra: something</p>
              </div>
            </div>

            <div className='flex flex-col whitespace-nowrap'>
              <Button
                icon={"favorite"}
                varient='outline'
              >
                Move to Wishlist
              </Button>
              <Button
                icon={"delete"}
                varient='noCover'
              >
                Remove from cart
              </Button>
            </div>
          </div>

        </div>
      </div>
    )
  }

  if (varient === CARD_CONSTANTS.VARIANT.CHECKOUT) {
    return (
      <div className='flex gap-4'>


        <div className='w-1/4'>
          <div className='aspect-[3/4] rounded-xl overflow-clip'>
            <img className='w-full h-full object-cover' src={imgLink} alt={title} />
          </div>
        </div>

        <div className='w-full flex'>

          <div className='w-full'>
            <h3 className='text-lg w-full'>{title} when long</h3>
            <p className='text-sm'>{category}</p>
            <div className='flex gap-0.5 flex-wrap  text-neutral-b'>
              <p>Quantity: 1</p>,
              <p>Size: UK 9</p>,
              <p>Color: Blue</p>,
              <p>Extra: something</p>
            </div>
          </div>

          {discountAmount == '0' ?
            <p className='text-lg'>{price}</p> :
            <div className='text-right w-fit'>
              <p className='text-lg'>{price}</p>
              <p className='text-neutral-b line-through'>{originalPrice}</p>
              <p className='text-c-error'>{discountAmount}% Off</p>
            </div>
          }
        </div>
      </div>
    )
  }

  if (varient === CARD_CONSTANTS.VARIANT.ORDERED) {
    return (
      <div className='flex gap-4'>

        <div className='w-1/6'>
          <div className='aspect-[3/4]  rounded-xl overflow-clip'>
            <img className='w-full h-full object-cover' src={imgLink} alt={title} />
          </div>
        </div>

        <div className='w-full flex flex-col gap-1'>

          <h3 className='w-full'>{title}</h3>
          <p className='text-sm'>{category}</p>

          <div className='flex gap-0.5 flex-wrap text-sm text-neutral-b'>
            <p>Quantity: 1</p>,
            <p>Size: UK 9</p>,
            <p>Color: Blue</p>,
            <p>Extra: something</p>
          </div>

          {discountAmount == '0' ?
            <p className='text-sm'>{price}</p> :
            <div className='text-sm flex gap-4 items-center'>
              <p className='text-neutral-b'>{price}</p>
              <p className='line-through text-neutral-d'>{originalPrice}</p>
              <p className='text-neutral-d'>{discountAmount}% Off</p>
            </div>
          }
        </div>

      </div>
    )
  }

  return (
    <div>
      <div className='relative p-2 aspect-[3/4] '>
        <div className='absolute inset-0 -z-1 rounded-4xl overflow-clip'>
          <img className='w-full h-full' src={imgLink} alt={title} />
        </div>
        <div className='ml-auto w-12 h-12 rounded-full overflow-clip'>
          <div className='w-full h-full bg-primary grid place-items-center'>*-*</div>
        </div>
      </div>

      <div className='mt-2'>
        <div>
          <p>{category}</p>
          <Divider className='my-1' />
        </div>
        <div className='grid gap-2'>
          <h3 className='text-l1'>{title}</h3>
          <p className='text-neutral-b'>{description}</p>

          {discountAmount == '0' ?
            <p className='text-l1'>{price}</p> :
            <div className='flex gap-4 items-center'>
              <p className='text-l1'>{price}</p>
              <p className='text-neutral-b line-through'>{originalPrice}</p>
              <p className='text-c-error'>{discountAmount}% Off</p>
            </div>
          }

        </div>
      </div>
    </div>
  )
}