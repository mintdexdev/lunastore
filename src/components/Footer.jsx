import { Container, Divider } from '@/components'
import { Link } from 'react-router'

const footerData = {
  country: 'India',
  creater: { name: 'mintdexdev', link: 'minter' },
  links: [
    {
      heading: 'About',
      linkList:
        [
          { name: 'Facebook', link: 'link', },
          { name: 'Instagram', link: 'link', },
          { name: 'X', link: 'link', },
        ]
    },
    {
      heading: 'Store',
      linkList:
        [
          { name: 'Facebook', link: 'link', },
          { name: 'Instagram', link: 'link', },
          { name: 'X', link: 'link', },
        ]
    },
    {
      heading: 'Company',
      linkList:
        [
          { name: 'Facebook', link: 'link', },
          { name: 'Instagram', link: 'link', },
          { name: 'X', link: 'link', },
        ]
    },
    {
      heading: 'Extra',
      linkList:
        [
          { name: 'Facebook', link: 'link', },
          { name: 'Instagram', link: 'link', },
          { name: 'X', link: 'link', },
        ]
    },
  ],
  socialLinks: [
    { name: 'Facebook', link: 'link', },
    { name: 'Instagram', link: 'link', },
    { name: 'X', link: 'link', },
  ],
  legalLinks: [
    { name: 'Privacy policy', link: 'solid' },
    { name: 'Terms of use', link: 'solid' }
  ]
}

export default function Footer() {
  return (
    <footer className='mt-8 pt-20 bg-c-2a text-c-1 '>
      <Container className=' grid gap-8'>
        <nav className='flex gap-6 '>
          {footerData.links.map(item => (
            <ul className='w-1/4 grid gap-4'
              key={item.heading}>
              <p className='text-helper4'>{item.heading}</p>
              {item.linkList.map(link => (
                <li key={link.name}>
                  <Link className='text-lg'
                    to={{ pathname: link.link }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>
        <Divider />
        <div className='flex'>
          <div className='w-1/2 text-[16rem] leading-[1.3]'>LUNA</div>
          <div className='w-1/2 grid items-end'>

            <div className='flex justify-between'>
              <p className='font-mono'>[11:05 AM, October 31, 2025]</p>
              <p>{footerData.country}</p>
              <div className='flex gap-4'>
                {footerData.socialLinks.map(item => (
                  <div key={item.name}>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            <div className='flex justify-between mb-8'>

              <div className='flex gap-4 mt-auto'>
                <p>Copyright ©2025 Luna. All rights reserved. </p>|
                {footerData.legalLinks.map(item => (
                  <span key={item.name}>{item.name}</span>
                ))}
              </div>

              <p>{footerData.creater.name}</p>

            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
