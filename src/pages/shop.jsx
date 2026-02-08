import { useState } from "react";
import Navbar from "../components/navbar";
import ProductCard from "../components/productCard";
import { allProducts } from "../data/products";
import TrustBar from "../components/trustBar";
import Footer from "../components/footer";

const categories = [
  "All",
  "Hoodies",
  "T-Shirts",
  "Jackets",
  "Caps",
  "Glasses",
  "Sweatshirts",
  "Sweatpants",
  "Footwear",
  "Shorts",
  "Pants",
  "Socks",
  "Skirts",
];

const sortOptions = [
  { label: "Price: Low → High", value: "price-asc" },
  { label: "Price: High → Low", value: "price-desc" },
  { label: "Name: A → Z", value: "name-asc" },
  { label: "Name: Z → A", value: "name-desc" },
];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");

  let filteredProducts =
    selectedCategory === "All"
      ? [...allProducts]
      : allProducts.filter((product) => product.category === selectedCategory);

  if (sortOption) {
    filteredProducts.sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar theme="light" />

      {/* Header */}
      <section
        className="relative w-full h-125 flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1761431312339-11fa60e4eb2b?q=80&w=1170&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest">
            Made For You
          </h1>
          <p className="text-gray-200 mt-4 text-lg md:text-xl">
            Browse our collection of premium streetwear
          </p>
        </div>
      </section>

      {/* Filters & Sorting */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 flex flex-col xl:flex-row gap-8 xl:justify-between xl:items-center">
        {/* Animated Radio Categories */}
        <div className="flex gap-3 overflow-x-auto xl:flex-wrap xl:overflow-visible smooth-scroll hide-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;

            return (
              <label
                key={cat}
                htmlFor={`category-${cat}`}
                className={`
                  relative cursor-pointer px-6 py-2 rounded-full uppercase font-semibold text-sm
                  transition-all duration-300 ease-out
                  ${
                    isActive
                      ? "bg-black text-white scale-105 shadow-lg"
                      : "bg-white text-black border border-black/30 hover:border-black hover:scale-105"
                  }
                  shrink-0
                `}
              >
                <input
                  type="radio"
                  id={`category-${cat}`}
                  name="category"
                  value={cat}
                  checked={isActive}
                  onChange={() => setSelectedCategory(cat)}
                  className="hidden"
                />

                {/* Animated ring */}
                <span
                  className={`
                    absolute inset-0 rounded-full pointer-events-none
                    transition-all duration-300
                    ${isActive ? "ring-2 ring-black ring-offset-2" : "ring-0"}
                  `}
                />

                <span className="relative z-10">{cat}</span>
              </label>
            );
          })}
        </div>

        {/* Sort Dropdown */}
        <div className="flex justify-center lg:justify-end">
          <select
            className="px-6 py-2 rounded-xl border text-black focus:outline-none focus:ring-2 focus:ring-black transition"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort By</option>
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-black/60 text-lg">
            No products found in this category.
          </p>
        )}
      </section>

      <TrustBar />
      <Footer />

      {/* Custom CSS for smooth scroll and hiding scrollbar */}
      <style jsx>{`
        .smooth-scroll {
          scroll-behavior: smooth;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default ShopPage;
