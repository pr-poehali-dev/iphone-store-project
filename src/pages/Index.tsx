import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import AccessoryCard from "@/components/AccessoryCard";
import ReviewCard from "@/components/ReviewCard";
import Footer from "@/components/Footer";
import { products, accessories, reviews } from "@/data/products";
import { FilterState } from "@/types";

const Index = () => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 150000],
    condition: "all",
    sortBy: "popularity",
  });

  const filteredProducts = products.filter((product) => {
    const matchesCondition =
      filters.condition === "all" || product.condition === filters.condition;
    const matchesPrice =
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1];
    return matchesCondition && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      {/* Catalog Section */}
      <section id="catalog" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Каталог iPhone
          </h2>

          <ProductFilter filters={filters} onFiltersChange={setFilters} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section id="accessories" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Аксессуары и чехлы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((accessory) => (
              <AccessoryCard key={accessory.id} accessory={accessory} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Отзывы покупателей
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
