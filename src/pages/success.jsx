import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/navbar";

const Success = () => {
  const order = JSON.parse(localStorage.getItem("lastOrder"));

  if (!order) return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar theme="light" />

      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Payment Successful 🎉
          </h1>

          <p className="text-gray-600 mb-8">
            Thank you for your order, {order.shipping.fullName}.
          </p>

          <div className="text-left space-y-3 mb-8">
            {order.items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex justify-between text-sm"
              >
                <span>
                  {item.name} ({item.size || "Standard"}) × {item.quantity}
                </span>
                <span>
                  {order.symbol}
                  {order.convertedTotal}
                </span>
              </div>
            ))}
          </div>

          <p className="text-lg font-semibold mb-2">
            Total Paid: {order.symbol}
            {order.convertedTotal}
          </p>

          <p className="text-sm text-gray-500 mb-8">
            Payment Method: {order.paymentMethod}
          </p>

          <Link
            to="/shop"
            className="inline-block bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
