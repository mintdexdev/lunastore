import { Container } from '@/components';
import { Link } from 'react-router';

const navlist = [
  { name: 'Shop', link: '/shop' },
  { name: 'Category', link: '/shop/t-shirt' },
  { name: 'Search', link: '/shop/search-result' },
  { name: 'Product', link: 'shop/product/t-shirt' },
  { name: 'Wishlist', link: '/shop/wishlist' },
  { name: 'Cart', link: '/shop/cart' },
  { name: 'Checkout', link: '/shop/checkout' },
  { name: 'Summary', link: '/shop/summary' },
  { name: 'Help', link: '/shop/help' },
  { name: 'auth', link: '/auth' },
  { name: 'account', link: '/account' },
  { name: 'About', link: '/about' },
  { name: 'privacy', link: '/privacy' },
  { name: 'terms', link: '/terms' },
]

const linkList = [
  { name: 'Shop', link: '/shop' },
  { name: 'Offers', link: '/shop/offers' },
  { name: 'Men', link: '/shop/men' },
  { name: 'Women', link: '/shop/women' },
  { name: 'Accessories', link: '/shop/accessories' },
  { name: 'Shoes', link: '/shop/shoes' },
]

export default function Navbar() {
  return (
    <nav className='bg-c-1a'>
      <Container>
        <div className='flex gap-2'>
          <span className='text-s1'>dev navbar</span>
          {navlist.map((item) => (
            <Link className='text-sm'
              key={item.name}
              to={{ pathname: item.link, }}>
              | {item.name}
            </Link>
          ))}
        </div>
      </Container>
      <Container>
        <div className='flex justify-between items-center'>
          <div>
            logo
          </div>
          <div className='flex gap-6'>
            {linkList.map((item) => (
              <Link className='text-sm'
                key={item.name}
                to={{ pathname: item.link, }}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className='flex gap-4'>
            <span className='material-symbols-outlined'>search</span>
            <span className='material-symbols-outlined'>favorite</span>
            <span className='material-symbols-outlined'>shopping_bag</span>
            <span className='material-symbols-outlined'>account_circle</span>
          </div>
        </div>
      </Container>
    </nav >
  )
}
