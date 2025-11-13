import { twMerge } from 'tailwind-merge';

export default function Banner(
  {
    imgLink = '/.temp/images/banner.jpg',
    imgAlt = 'Banner',
    heading = '',
    title = 'Title',
    tagline = '',

    varient = 'default',
    textAlign = "center",
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


  if (varient === 'sub') {

    let subTextAlign = " "

    switch (textAlign) {

      case "left":
        subTextAlign = "text-left my-auto"
        break;

      case "right":
        subTextAlign = "text-right my-auto"
        break;

      case "top":
        subTextAlign = "text-center mb-auto"
        break;

      case "bottom":
        subTextAlign = "text-center mt-auto"
        break;

      case "topLeft":
        subTextAlign = "text-left mb-auto"
        break;

      case "topRight":
        subTextAlign = "text-right mb-auto"
        break;

      case "bottomLeft":
        subTextAlign = "text-left mt-auto"
        break;

      case "bottomRight":
        subTextAlign = "text-right mt-auto"
        break;

      default:
        subTextAlign = "text-center my-auto"
        break;
    }

    return (
      <div className={twMerge('p-16-80 relative aspect-[3/1] grid overflow-clip text-primary', className)}>

        <div className='top-0 absolute aspect-[3/1] overflow-clip -z-[1]'>
          <img className='w-full h-full object-cover' src={imgLink} alt={imgAlt} />
        </div>

        <div className={twMerge('text-shadow-neutral-a text-shadow-lg ', subTextAlign)}>
          <p className='text-sm uppercase'>{heading}</p>
          <h2 className='text-l5'>{title}</h2>
          <p className='text-l1'>{tagline}</p>
        </div>

      </div>
    )
  }

  return (
    <div className={twMerge('p-16-80 relative aspect-[3/1] grid place-items-center text-primary', className)}>

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