import { Footer, Navbar } from '@/components';
import { Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
