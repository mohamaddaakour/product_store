import ProductCard from "../components/ProductCard";
import { products } from "../data/product";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}

export default HomePage;