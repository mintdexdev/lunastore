 export default function CategoryGroup(
  {
    title = 'All Categories',
    imgLink = '/.temp/images/category.jpg',
  }
) {
  return (
    <div>
      <h2 className='text-l4 text-center'>{title}</h2>
      <div className='mt-10 grid grid-cols-4 gap-6'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((category) => (
          <div className='aspect-square bg-neutral-600 rounded-3xl overflow-clip'
            key={category}>
            <img className='w-full h-full' src={imgLink} alt={category} />
          </div>
        ))}
      </div>
    </div >
  )
}
