import Navbar from "../components/navbar";
import { useCart } from "../context/cartContext";
import CartItem from "../components/cartItem";
import { Link } from "react-router-dom";
import { useCurrency } from "../context/currencyContext";

const Cart = () => {
  const { cart, totalItems, totalPrice } = useCart();
  const { convert, symbol } = useCurrency();

  if (cart.length === 0)
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-6">
            Add some items to your cart to get started.
          </p>
          <Link
            to="/shop"
            className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-md shadow-lg hover:opacity-90 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar theme="light" />

      <div className="max-w-7xl mx-auto md:px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {cart.map((item) => (
            <CartItem key={`${item.id}-${item.size}`} item={item} />
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-6 h-fit border border-gray-200">
          <h2 className="text-3xl font-bold tracking-wide">Order Summary</h2>

          {/* List of items */}
          <div className="flex flex-col gap-5">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex justify-between items-center p-4 rounded-xl bg-gray-50 shadow-inner border border-gray-100 hover:shadow-lg transition"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-gray-900 text-lg">
                    {item.name}
                  </span>
                  {item.size && (
                    <span className="text-gray-500 text-sm">
                      Size: {item.size}
                    </span>
                  )}
                  <span className="text-gray-500 text-sm">
                    Quantity: {item.quantity}
                  </span>
                </div>
                <div className="font-semibold text-gray-900 text-lg">
                  {symbol}
                  {convert(item.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="border-t border-gray-200 pt-6 flex flex-col gap-4">
            <p className="text-gray-600 text-lg flex justify-between">
              <span>Total Items:</span>
              <span className="font-semibold">{totalItems}</span>
            </p>
            <p className="text-gray-900 text-2xl font-bold flex justify-between">
              <span>Subtotal:</span>
              <span>
                {symbol}
                {convert(totalPrice)}
              </span>
            </p>
          </div>

          <button className="mt-6 bg-linear-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition font-semibold text-lg">
            <a href="/checkout">Proceed to Checkout</a>
          </button>
          <Link
            to="/try-on"
            className="mt-4 block text-center bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition font-semibold"
          >
            Test Outfit 👕
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
