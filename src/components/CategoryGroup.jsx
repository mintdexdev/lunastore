export default function CategoryGroup(
  {
    varient = "default",
    title = 'All Categories',
    categories = [{ name: "placeholder", imgLink: '/.temp/images/category.jpg' }],
  }
) {
  if (varient === "main") {
    return (
      <div>
        <h2 className='text-l4 text-center'>{title}</h2>
        <div className='mt-10 grid grid-cols-4 gap-6'>
          {categories.map((category) => (
            <div className='aspect-[3/4] bg-neutral-600 rounded-3xl overflow-clip'
              key={category.name}>
              <img className='w-full h-full object-cover' src={category.imgLink} alt={category.name} />
            </div>
          ))}
        </div>
      </div >
    )
  }

  return (
    <div>
      <h2 className='text-l4 text-center'>{title}</h2>
      <div className='mt-10 grid grid-cols-4 gap-6'>
        {categories.map((category) => (
          <div className='aspect-square bg-neutral-600 rounded-3xl overflow-clip'
            key={category.name}>
            <img className='w-full h-full' src={category.imgLink} alt={category.name} />
          </div>
        ))}
      </div>
    </div >
  )
}
