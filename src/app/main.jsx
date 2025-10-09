import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { RootLayout } from './layout';
import {
  Auth,
  Home,
  About,
  Account,
  Privacy,
  Terms,
  Shop, Category, Product, Cart, Wishlist, Summary, Help, SearchResult, Checkout
} from './pages';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "account", Component: Account },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
      {
        path: "shop",
        children: [
          { index: true, Component: Shop },
          { path: ":categorySlug", Component: Category },
          { path: "search-result", Component: SearchResult },
          { path: "cart", Component: Cart },
          { path: "wishlist", Component: Wishlist },
          { path: "checkout", Component: Checkout },
          { path: "summary", Component: Summary },
          { path: "help", Component: Help },
          { path: "product/:productSlug", Component: Product },
        ],
      },
    ],
  },
  {
    path: "/auth",
    Component: Auth,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
