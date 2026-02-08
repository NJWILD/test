import { useCart } from "../context/cartContext";
import { useCurrency } from "../context/currencyContext";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, totalItems, totalPrice, clearCart } = useCart();
  const { convert, symbol, currency } = useCurrency();

  const [shipping, setShipping] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!cart.length) {
      alert("Your cart is empty");
      return false;
    }
    for (let key in shipping) {
      if (!shipping[key]) {
        alert("Please fill all shipping details");
        return false;
      }
    }
    return true;
  };

  /* ================= LOAD PAYMENT SCRIPTS ================= */

  useEffect(() => {
    if (!window.FlutterwaveCheckout) {
      const fw = document.createElement("script");
      fw.src = "https://checkout.flutterwave.com/v3.js";
      fw.async = true;
      document.body.appendChild(fw);
    }

    if (!window.PaystackPop) {
      const ps = document.createElement("script");
      ps.src = "https://js.paystack.co/v1/inline.js";
      ps.async = true;
      document.body.appendChild(ps);
    }
  }, []);

  /* ================= SAVE ORDER ================= */

  const saveOrder = (paymentMethod, reference) => {
    const order = {
      items: cart,
      shipping,
      paymentMethod,
      reference,
      currency,
      symbol,
      totalItems,
      totalPrice,
      convertedTotal: convert(totalPrice),
      date: new Date().toISOString(),
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));
    clearCart();
    navigate("/success");
  };

  /* ================= FLUTTERWAVE ================= */

  const handleFlutterwave = () => {
    if (!validate()) return;

    window.FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST_xxxxxxxxxxxxxx", // 🔑 replace
      tx_ref: `flw-${Date.now()}`,
      amount: parseFloat(convert(totalPrice)),
      currency,
      payment_options: "card,ussd,banktransfer",
      customer: {
        email: shipping.email,
        phone_number: shipping.phone,
        name: shipping.fullName,
      },
      callback: function (response) {
        saveOrder("Flutterwave", response.transaction_id);
      },
      onclose: function () {
        console.log("Flutterwave closed");
      },
    });
  };

  /* ================= PAYSTACK (NGN ONLY) ================= */

  const handlePaystack = () => {
    if (!validate()) return;

    if (currency !== "NGN") {
      alert("Paystack supports NGN only. Switch currency to NGN.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: "pk_test_f5ed3e79b7c217ef827ad52a481bec40e2485ddb", // 🔑 replace
      email: shipping.email,
      amount: totalPrice * 100, // kobo
      currency: "NGN",
      ref: `psk-${Date.now()}`,
      callback: function (response) {
        saveOrder("Paystack", response.reference);
      },
      onClose: function () {
        console.log("Paystack closed");
      },
    });

    handler.openIframe();
  };

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar theme="light" />

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Shipping */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6">Shipping Details</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(shipping).map((field) => (
              <input
                key={field}
                name={field}
                value={shipping[field]}
                onChange={handleChange}
                placeholder={field
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (s) => s.toUpperCase())}
                className="border rounded px-4 py-3 focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </form>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl shadow-xl p-8 h-fit">
          <h2 className="text-3xl font-bold mb-6">Order Summary</h2>

          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex justify-between mb-4 text-sm"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500">
                  {item.quantity} × {item.size || "Standard"}
                </p>
              </div>
              <p className="font-semibold">
                {symbol}
                {convert(item.price * item.quantity)}
              </p>
            </div>
          ))}

          <div className="border-t pt-4 mt-4">
            <p className="flex justify-between text-lg">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </p>
            <p className="flex justify-between text-2xl font-bold mt-2">
              <span>Total</span>
              <span>
                {symbol}
                {convert(totalPrice)}
              </span>
            </p>
          </div>

          {/* Payments */}
          <div className="mt-6 space-y-4">
            <button
              onClick={handleFlutterwave}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
            >
              Pay with Flutterwave ({currency})
            </button>

            <button
              onClick={handlePaystack}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
            >
              Pay with Paystack (NGN only)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
