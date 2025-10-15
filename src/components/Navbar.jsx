import React from 'react'
import { Container } from '@/components'
import { Link } from 'react-router'

const navlist = [
  { name: "Shop", link: "/shop" },
  { name: "Category", link: "/shop/t-shirt" },
  { name: "Search", link: "/shop/search-result" },
  { name: "Product", link: "shop/product/t-shirt" },
  { name: "Wishlist", link: "/shop/wishlist" },
  { name: "Cart", link: "/shop/cart" },
  { name: "Checkout", link: "/shop/checkout" },
  { name: "Summary", link: "/shop/summary" },
  { name: "Help", link: "/shop/help" },
  { name: "auth", link: "/auth" },
  { name: "account", link: "/account" },
  { name: "About", link: "/about" },
  { name: "privacy", link: "/privacy" },
  { name: "terms", link: "/terms" },
]

export default function Navbar() {
  return (
    <nav className='bg-c-1a'>
      <Container>
        <div className='flex gap-2'>
          <span className='text-s1'>dev navbar</span>
          {navlist.map((item) => (
            <Link className='text-sm '
              to={{ pathname: item.link, }}>
              | {item.name} 
            </Link>
          ))}
        </div>
      </Container>
      <Container>
        <div className='flex gap-2 '>
           Navbar
        </div>
      </Container>
    </nav >
  )
}
