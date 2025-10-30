import { ProductCard } from '.';

export default function AllProducts({
  cardVarient = 'default'
}) {
  return (
    <div>
      <div className='flex justify-between items-center'>

        <button className=' border px-4 h-[40px] rounded-full' type='button'>Filter</button>

        <div> {10000} products</div>

        <div className='flex gap-2'>
          <button className=' border px-4 h-[40px] rounded-full' type='button'>Sort by:</button>
          <button type='button'>View</button>
        </div>
      </div>

      <div className='mt-8 grid grid-cols-4 gap-x-6 gap-y-8'>

        <ProductCard varient={cardVarient}/>
        <ProductCard varient={cardVarient}/>
        <ProductCard varient={cardVarient}/>
        <ProductCard varient={cardVarient}/>
        <ProductCard varient={cardVarient}/>
        <ProductCard varient={cardVarient}/>
        <ProductCard varient={cardVarient}/>
        <ProductCard varient={cardVarient}/>

      </div>
    </div>
  )
}
