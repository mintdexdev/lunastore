import React from 'react';
import { ProductCard } from '@/components';

export default function ProductGroup(
  {
    varient = 'default',
    cardVarient = 'default',
    TrailingLink = false,

    title = 'enter title here',
    TrailingLinkText = 'Explore all',
  }
) {

  if (varient === 'latest') {
    return (

      <div>
        <div className='flex justify-between items-center'>
          <h2 className='text-l4'>{title}</h2>
          {TrailingLink && <p className='whitespace-nowrap'>{TrailingLinkText} -</p>}
        </div>

        <div className='mt-8 grid grid-cols-3 gap-6'>

          <ProductCard varient={cardVarient} />
          <ProductCard varient={cardVarient} />
          <ProductCard varient={cardVarient} />

        </div>
      </div>
    )
  }

  return (

    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-l4'>{title}</h2>
        {TrailingLink && <p className='whitespace-nowrap'>{TrailingLinkText} -</p>}
      </div>

      <div className='mt-8 grid grid-cols-4 gap-6'>

        <ProductCard varient={cardVarient} />
        <ProductCard varient={cardVarient} />
        <ProductCard varient={cardVarient} />
        <ProductCard varient={cardVarient} />

      </div>
    </div>
  )
}
