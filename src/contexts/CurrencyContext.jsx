import { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyContextProvider = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState(
    "USD - United States Dollar"
  );
  const [toCurrency, setToCurrency] = useState("MMK - Burmese Kyat");
  const [amount, setAmount] = useState(1);

  const baseCode = fromCurrency.split(" ")[0];
  const targetCode = toCurrency.split(" ")[0];
  
  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
    baseCode,
    targetCode,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
