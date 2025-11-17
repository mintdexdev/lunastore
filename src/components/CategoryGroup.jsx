import { twMerge } from "tailwind-merge"

const CSS_STYLE = {
  varient: { main: 'main', aspectRatio: 'aspect-[3/4]' }
}

export default function CategoryGroup(
  {
    varient = "default",
    title = 'All Categories',
    categories = [{ name: "placeholder", imgLink: '/.temp/images/category.jpg' }],
  }
) {

  if (varient === CSS_STYLE.varient.main) {
    CSS_STYLE.varient.aspectRatio = 'aspect-[3/4]'
  }

  return (
    <div>
      <h2 className='text-l5 text-center'>{title}</h2>
      <div className='mt-10 grid grid-cols-4 gap-6'>
        {categories.map((category) => (
          <div className={twMerge(' bg-neutral-600 rounded-3xl overflow-clip', CSS_STYLE.varient.aspectRatio)}
            key={category.name}>
            <img className='w-full h-full object-cover' src={category.imgLink} alt={category.name} />
          </div>
        ))}
      </div>
    </div >
  )
}
