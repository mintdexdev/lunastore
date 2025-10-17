import React from 'react'
import { CARD_CONSTANTS } from '@/app/constants/ui.constants'
import { Divider } from '.'

export default function ProductCard(
  { varient = CARD_CONSTANTS.VARIANT.DEFAULT,

    imgLink = '/.temp/images/product.jpg',
    category = 'T-shirt',
    title = "Title: Batman t-shirt",
    description = "Embrace minimalist aesthetics with this half-zip shirt  brace minimalist aestheti brace minimali...",
    price = "$199.99",
    originalPrice = "$249.99",
    discount = "35"
  }
) {
  if (varient === CARD_CONSTANTS.VARIANT.EMBEDDED) {
    return (
      <div className='relative p-6 aspect-[3/4] text-c-1'>

        <div className='absolute inset-0 -z-[1] rounded-3xl overflow-clip'>
          <img className='w-full h-full' src={imgLink} alt={title} />
        </div>


        <div className='flex flex-col gap-2'>
          <h3 className='text-l1'>{title}</h3>
          <p className='text-helper4'>{description}</p>
          <p className='text-l1'>{price}</p>
        </div>
      </div>
    )
  }

  if (varient === CARD_CONSTANTS.VARIANT.CATEGORY) {
    return (
      <div>
        <div className='relative  text-c-1 p-6 aspect-[3/4] '>
          <div className='absolute inset-0 -z-[1] rounded-3xl overflow-clip'>
            <img className='w-full h-full ' src={imgLink} alt={title} />
          </div>
          <div className='ml-auto w-6 h-6 rounded-full overflow-clip'>
            <div className='w-full h-full bg-c-4' />
          </div>
        </div>

        <div className='flex flex-col gap-2 mt-2'>
          <h3 className='text-l1'>{title}</h3>
          <p className='text-helper4'>{description}</p>
          <div className='flex gap-4 items-center'>
            <p className='text-l1'>{price}</p>
            <p className='text-helper2 line-through'>{originalPrice}</p>
            <p className='text-c-4'>{discount}% Off</p>
          </div>
        </div>
      </div>
    )
  }

  if (varient === CARD_CONSTANTS.VARIANT.WISHLIST) {
    return (
      <div>
        <div className='relative  text-c-1 p-6 aspect-[3/4] '>
          <div className='absolute inset-0 -z-[1] rounded-3xl overflow-clip'>
            <img className='w-full h-full ' src={imgLink} alt={title} />
          </div>
          <div className='ml-auto w-6 h-6 rounded-full overflow-clip'>
            <div className='w-full h-full bg-c-4' />
          </div>
        </div>

        <div className='flex flex-col gap-2 mt-2'>
          <div>
            <p>{category}</p>
            <div className='h-[1px] bg-helper3' />
          </div>
          <h3 className='text-l1'>{title}</h3>
          <p className='text-helper4'>{description}</p>
          <div className='flex gap-4 items-center'>
            <p className='text-l1'>{price}</p>
            <p className='text-helper2 line-through'>{originalPrice}</p>
            <p className='text-c-4'>{discount}% Off</p>
          </div>
        </div>
      </div>
    )
  }

  if (varient === CARD_CONSTANTS.VARIANT.CART) {
    return (
      <div className='flex gap-4'>
        <div className='w-1/4 aspect-[3/4] rounded-[20px] overflow-clip'>
          <img className='w-full h-full object-cover' src={imgLink} alt={title} />
        </div>

        <div className='w-full'>
          <h3 className='text-l2 w-full'>{title}</h3>

          <div className='text-sm mt-1 w-full'>
            <p>{category}</p>
            <div className='text-helper2'>
              <p>Size: UK 9</p>
              <p>Color: Blue</p>
              <p>Exttra: something</p>
            </div>
          </div>
        </div>

        <div className='w-1/3 '>
          <div className=' text-right'>
            <p className='text-l2'>{price}</p>
            <p className='text-helper2 line-through'>{originalPrice}</p>
            <p className='text-c-4'>{discount}% Off</p>
          </div>

          <div className='flex flex-col whitespace-nowrap'>
            <button className='h-[40px] border px-4 rounded-full w-fit'
              type="button">
              Move to wishlist
            </button>
            <button className='text-helper2 underline' type="button">remove from cart</button>
          </div>
        </div>

      </div>
    )
  }

  if (varient === CARD_CONSTANTS.VARIANT.CHECKOUT) {
    return (
      <div className='flex gap-4'>


        <div className='w-1/4'>
          <div className='aspect-[3/4] rounded-lg overflow-clip'>
            <img className='w-full h-full object-cover' src={imgLink} alt={title} />
          </div>
        </div>

        <div className='w-full flex'>

          <div className='w-full'>
            <h3 className='text-lg w-full'>{title} when long</h3>
            <div className='text-sm w-full'>
              <p>{category}</p>
              <div className='flex gap-1 flex-wrap text-helper2'>
                <p>Size: UK 9</p>
                <Divider horizontal />
                <p>Color: Blue</p>
                <Divider horizontal />
                <p>Exttra: something</p>
              </div>
            </div>
          </div>

          <div className='text-right w-fit'>
            <p className='text-lg'>{price}</p>
            <p className='text-helper2 line-through'>{originalPrice}</p>
            <p className='text-c-4'>{discount}% Off</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className='relative  text-c-1 p-6 aspect-[3/4] '>
        <div className='absolute inset-0 -z-[1] rounded-3xl overflow-clip'>
          <img className='w-full h-full' src={imgLink} alt={title} />
        </div>
        <div className='ml-auto w-6 h-6 rounded-full overflow-clip'>
          <div className='w-full h-full bg-c-3' />
        </div>
      </div>

      <div className='flex flex-col gap-2 mt-2'>
        <div>
          <p>{category}</p>
          <div className='h-[1px] bg-helper3' />
        </div>
        <h3 className='text-l1'>{title}</h3>
        <p className='text-helper4'>{description}</p>
        <div className='flex gap-4 items-center'>
          <p className='text-l1'>{price}</p>
          <p className='text-helper2 line-through'>{originalPrice}</p>
          <p className='text-c-4'>{discount}% Off</p>
        </div>
      </div>
    </div>
  )
}