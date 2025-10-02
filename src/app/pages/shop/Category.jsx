// /shop/:categoryid
import { Navigate, useParams } from "react-router";

const categories = [
  { "id": "101", "name": "Electronics", "slug": "electronics" },
  { "id": "102", "name": "Clothing", "slug": "clothing" },
  { "id": "103", "name": "Books", "slug": "books" }
]


export default function Category() {
  const { categorySlug } = useParams();

  // Find category by slug
  const category = categories.find(c => c.slug === categorySlug);

  if (!category) return <Navigate to="/shop" replace />;

  return (
    <div>
      <h1>Category: {category.name}</h1>
    </div>
  );
}