import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/navbar";
import { allProducts } from "../data/products";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/cartContext";
import { useCurrency } from "../context/currencyContext";
import FAQSection from "../components/FAQSection";
import Testimonials from "../components/testimonials";
import TrustBar from "../components/trustBar";
import Footer from "../components/footer";

const ProductPage = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id.toString() === id);
  const { addToCart } = useCart();
  const { convert, symbol } = useCurrency();
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
  const [added, setAdded] = useState(false);

  if (!product)
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">Product not found.</p>
      </div>
    );

  const handleAddToCart = () => {
    if (product.sizes?.length && !selectedSize) return;
    addToCart(product, 1, product.sizes?.length ? selectedSize : null);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  const recommendations = allProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar theme="light" />

      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12 relative">
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:h-125 h-80 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="md:w-1/2 flex flex-col gap-6 relative">
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-2xl font-semibold">
            {symbol}
            {convert(product.price)}
          </p>
          <p
            className={`font-medium ${
              product.stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Sold Out"}
          </p>

          {product.sizes?.length > 0 && (
            <div className="flex items-center gap-4">
              <span className="font-semibold">Size:</span>
              <select
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            className={`flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition mt-4 ${
              product.stock === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={product.stock === 0}
            onClick={handleAddToCart}
          >
            <ShoppingBag size={20} />
            Add to Cart
          </button>

          {added && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-lg font-bold animate-pulse rounded-xl">
              Added to Cart!
            </div>
          )}
        </div>
      </section>
      <Testimonials />
      <FAQSection />
      {recommendations.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {recommendations.map((prod) => (
              <Link key={prod.id} to={`/product/${prod.id}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full md:h-64 object-cover"
                  />
                  <div className="p-4 flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">{prod.name}</h3>
                    <p className="text-black font-medium">
                      {symbol}
                      {convert(prod.price)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      <TrustBar />
      <Footer />
    </div>
  );
};

export default ProductPage;
