import { createContext, useContext, useState, useEffect } from "react";
import { useCurrency } from "./currencyContext";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { convert } = useCurrency();
  const clearCart = () => {
    setCart([]);
  };

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("apexCart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("apexCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1, size = null) => {
    if (product.sizes?.length && !size) return;

    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id && i.size === size);
      if (exists) {
        return prev.map((i) =>
          i.id === product.id && i.size === size
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { ...product, quantity, size }];
    });
  };

  const removeFromCart = (productId, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === productId && item.size === size))
    );
  };

  const updateQuantity = (productId, size, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const updateSize = (productId, oldSize, newSize) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === productId && i.size === newSize);
      return prev
        .map((i) => {
          if (i.id === productId && i.size === oldSize) {
            if (exists) return null;
            return { ...i, size: newSize };
          }
          return i;
        })
        .filter(Boolean);
    });
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateSize,
        totalItems,
        totalPrice,
        convert,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
