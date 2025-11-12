import { Footer, Navbar } from '@/components';
import { Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Outlet />

      <Footer />
    </>
  )
}
