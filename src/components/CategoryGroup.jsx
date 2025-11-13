export default function CategoryGroup(
  {
    title = 'All Categories',
    items = [
      { name: "category1", imgLink: '/.temp/images/category.jpg' },
      { name: "category2", imgLink: '/.temp/images/category.jpg' },
      { name: "category3", imgLink: '/.temp/images/category.jpg' },
      { name: "category4", imgLink: '/.temp/images/category.jpg' },
    ]
  }
) {
  return (
    <div>
      <h2 className='text-l4 text-center'>{title}</h2>
      <div className='mt-10 grid grid-cols-4 gap-6'>
        {items.map((category) => (
          <div className='aspect-square bg-neutral-600 rounded-3xl overflow-clip'
            key={category.name}>
            <img className='w-full h-full' src={category.imgLink} alt={category.name} />
          </div>
        ))}
      </div>
    </div >
  )
}
