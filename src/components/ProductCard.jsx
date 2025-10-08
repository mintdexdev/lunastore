import React from 'react'

export const CARD_CONSTANTS = {
  VARIANT: {
    DEFAULT: "default",
    EMBEDDED: "embedded",
    CATEGORY: "category",
    WISHLIST: "wishlist",
    CART: "cart"
  },

  LAYOUT: {
    GRID: "grid",
    LIST: "list"
  },
};


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