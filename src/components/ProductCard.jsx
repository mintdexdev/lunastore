import React from 'react'

export default function ProductCard(
  { type = "full",

    category = 'T-shirt',
    title = "Title: Batman t-shirt",
    description = "Embrace minimalist aesthetics with this half-zip shirt  brace minimalist aestheti brace minimali...",
    price = "$199.99",
    originalPrice = "$249.99",
    discount = "35"
  }
) {
  if (type === "short") {
    return (
      <div className='bg-c-2a text-white p-6 aspect-[3/4] rounded-3xl'>
        <h3 className='text-l1'>{title}</h3>
        <p className='text-helper4'>{description}</p>
        <p className='text-l1'>{price}</p>
      </div>
    )
  }

  return (
    <div>
      <div className='bg-neutral-600 text-white p-6 aspect-[3/4] rounded-3xl'>
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