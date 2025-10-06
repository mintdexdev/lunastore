import React from 'react'

export default function Banner(
  {
    imgLink = '/.temp/images/banner.jpg',
    imgAlt = "bnner",
    pageName = "page Name",
    title = "Title",
    tagline = ""
  }
) {
  return (
    <div className='relative aspect-[3/1] text-c-1 grid place-items-center'>

      <div className='top-0 absolute aspect-[3/1] overflow-clip -z-[1]'>
        <img className='w-full h-full object-cover' src={imgLink} alt={imgAlt} />
      </div>

      <div className='text-center text-shadow-helper1 text-shadow-lg'>
        <p className='text-sm uppercase'>{pageName}</p>
        <h1 className='text-l7'>{title}</h1>
        <p className='text-l2'>{tagline}</p>
      </div>

    </div>
  )
}