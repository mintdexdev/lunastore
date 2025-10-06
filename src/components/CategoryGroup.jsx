import React from 'react'

export default function CategoryGroup(
  {
    title = "All Categories"
  }
) {
  return (
    <div>
      <h2 className='text-l4 text-center'>{title}</h2>
      <div className='mt-10 grid grid-cols-4 gap-6'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <div className='aspect-square bg-neutral-600 rounded-3xl'></div>
        ))}
      </div>
    </div>
  )
}
