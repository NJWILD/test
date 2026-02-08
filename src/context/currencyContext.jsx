import { createContext, useContext, useState, useEffect } from "react";

const CurrencyContext = createContext();
export const useCurrency = () => useContext(CurrencyContext);

const rates = {
  NGN: 1,
  USD: 0.0027,
  EUR: 0.0025,
  GBP: 0.0021,
};

const symbols = { NGN: "₦", USD: "$", EUR: "€", GBP: "£" };

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(
    localStorage.getItem("currency") || "NGN"
  );

  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  const convert = (amount) => {
    const value = amount * rates[currency];
    return value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const symbol = symbols[currency];

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, convert, symbol }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
