import React from 'react'
import { Navigate, useParams } from 'react-router';

const products = [
  {
    "id": "201",
    "name": "Laptop",
    "slug": "laptop",
    "categoryId": "101",
    "price": 1200
  },
  {
    "id": "202",
    "name": "Smartphone",
    "slug": "smartphone",
    "categoryId": "101",
    "price": 800
  },
  {
    "id": "203",
    "name": "T-Shirt",
    "slug": "t-shirt",
    "categoryId": "102",
    "price": 20
  },
  {
    "id": "204",
    "name": "Jeans",
    "slug": "jeans",
    "categoryId": "102",
    "price": 50
  },
  {
    "id": "205",
    "name": "Novel",
    "slug": "novel",
    "categoryId": "103",
    "price": 15
  },
  {
    "id": "206",
    "name": "Notebook",
    "slug": "notebook",
    "categoryId": "103",
    "price": 5
  }
]


export default function Product() {
  const { productSlug } = useParams();

  // Find product by slug
  const product = products.find(p => p.slug === productSlug);

  // Redirect if product not found
  if (!product) return <Navigate to="/shop" replace />;

  return (
    <div>
      <h1>Product: {product.name}</h1>
      <p>Internal ID: {product.id}</p>
      <p>Price: ${product.price}</p>
      <p>Category ID: {product.categoryId}</p>
    </div>
  );
}
