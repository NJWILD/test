import { useCart } from "../context/cartContext";
import { useCurrency } from "../context/currencyContext";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart, updateSize } = useCart();
  const { convert, symbol } = useCurrency();
  const sizes = item.sizes || [];

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition relative border border-gray-200">
      <img
        src={item.image}
        alt={item.name}
        className="w-full sm:w-24 md:h-24 object-cover rounded-lg"
      />

      <div className="flex-1 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600 font-medium">
          {symbol}
          {convert(item.price)}
        </p>

        {/* Quantity */}
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() =>
              updateQuantity(item.id, item.size, Math.max(1, item.quantity - 1))
            }
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            -
          </button>
          <span className="px-3">{item.quantity}</span>
          <button
            onClick={() =>
              updateQuantity(item.id, item.size, item.quantity + 1)
            }
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            +
          </button>
        </div>

        {/* Size selection */}
        {sizes.length > 0 && (
          <div className="flex gap-2 mt-2 flex-wrap">
            {sizes.map((sizeOption) => (
              <button
                key={sizeOption}
                className={`px-3 py-1 border rounded ${
                  item.size === sizeOption
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } transition`}
                onClick={() => updateSize(item.id, item.size, sizeOption)}
              >
                {sizeOption}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => removeFromCart(item.id, item.size)}
        className="absolute md:top-2 top-105 right-2 text-red-600 hover:text-red-800 md:text-xl text-2xl font-bold"
      >
        ×
      </button>
    </div>
  );
};

export default CartItem;
