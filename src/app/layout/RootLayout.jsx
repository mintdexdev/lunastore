import { Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <div>
      <div>header</div>
      <Outlet />
      <div>footer</div>


    </div>
  )
}
