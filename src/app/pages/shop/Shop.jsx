import { Banner, Container } from '@/components'
import React from 'react'

export default function Shop() {
  return (
    <div>
      <Banner
        pageName='shop'
        title='Buy all you want'
        tagline='Everything you need, Everything you want' />

      <Container>
        Shi Content
      </Container>
    </div>
  )
}
