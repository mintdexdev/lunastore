import { Footer, Navbar } from '@/components';
import { Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className='flex flex-col gap-20'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
