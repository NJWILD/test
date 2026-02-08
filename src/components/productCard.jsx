import { useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/cartContext";
import { useCurrency } from "../context/currencyContext";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { convert, symbol } = useCurrency();
  const [added, setAdded] = useState(false);

  const handleViewProduct = () => navigate(`/product/${product.id}`);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (product.stock === 0) return;
    addToCart(product, 1, product.sizes?.[0] || null);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 relative cursor-pointer"
      onClick={handleViewProduct}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:h-80 h-75 object-cover "
      />

      {added && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-lg font-bold animate-pulse">
          Added to Cart!
        </div>
      )}

      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <button
            className="bg-purple-600 text-white p-2 rounded-full hover:bg-green-800 transition"
            onClick={handleAddToCart}
          >
            <ShoppingBag size={16} />
          </button>
        </div>

        <p className="text-black font-medium">
          {symbol}
          {convert(product.price)}
        </p>

        <button
          className="mt-2 bg-black text-white px-4 py-2 uppercase font-semibold tracking-wide hover:bg-gray-800 transition"
          onClick={(e) => {
            e.stopPropagation();
            handleViewProduct();
          }}
        >
          View
        </button>
      </div>

      {product.stock === 0 && (
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
          Sold Out
        </span>
      )}
    </div>
  );
};

export default ProductCard;
