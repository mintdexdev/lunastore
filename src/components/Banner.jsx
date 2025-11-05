import { twMerge } from 'tailwind-merge';

export default function Banner(
  {
    imgLink = '/.temp/images/banner.jpg',
    imgAlt = 'Banner',
    heading = '',
    title = 'Title',
    tagline = '',
    varient = 'default',
    className = ''
  }
) {
  if (varient === 'noImage') {
    return (
      <div className={`max-w-[1920px] p-40 mx-auto grid place-items-center ${className}`}>

        <div className='text-center'>
          <p className='text-sm uppercase'>{heading}</p>
          <h1 className='text-l5'>{title}</h1>
          <p className='text-l2'>{tagline}</p>
        </div>

      </div>
    )
  }

  if (varient === 'full') {
    return (
      <div className={twMerge('relative aspect-[3/1] text-primary grid place-items-center overflow-clip', className)}>

        <div className='inset-0 absolute aspect-[3/1] overflow-clip -z-1'>
          <img className='w-full h-full object-cover' src={imgLink} alt={imgAlt} />
        </div>

        <div className='text-center text-shadow-neutral-a text-shadow-lg'>
          <p className='text-sm uppercase'>{heading}</p>
          <h2 className='text-l5'>{title}</h2>
          <p className='text-l1'>{tagline}</p>
        </div>

      </div>
    )
  }

  if (varient === 'sub') {
    return (
      <div className={twMerge('relative aspect-[3/1] text-primary grid place-items-center overflow-clip', className)}>

        <div className='top-0 absolute aspect-[3/1] overflow-clip -z-[1]'>
          <img className='w-full h-full object-cover' src={imgLink} alt={imgAlt} />
        </div>

        <div className='text-center text-shadow-neutral-a text-shadow-lg'>
          <p className='text-sm uppercase'>{heading}</p>
          <h2 className='text-l5'>{title}</h2>
          <p className='text-l1'>{tagline}</p>
        </div>

      </div>
    )
  }

  return (
    <div className={twMerge('relative aspect-[3/1] grid place-items-center text-primary', className)}>

      <div className='inset-0 absolute aspect-[3/1] overflow-clip -z-[1]'>
        <img className='w-full h-full object-cover' src={imgLink} alt={imgAlt} />
      </div>

      <div className='text-center text-shadow-neutral-a text-shadow-lg'>
        <p className='text-sm uppercase'>{heading}</p>
        <h1 className='text-l6'>{title}</h1>
        <p className='text-l2'>{tagline}</p>
      </div>

    </div>
  )
}