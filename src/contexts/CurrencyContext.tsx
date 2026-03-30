import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Currency = 'RUB' | 'USD' | 'CNY';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  manualRate: number | null;
  setManualRate: (rate: number | null) => void;
  convertPrice: (priceInRUB: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);
 
const exchangeRates = {
  USD: 90,  // 1 USD = 90 RUB
  CNY: 12.5, // 1 CNY = 12.5 RUB
  RUB: 1,
};

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('RUB');
  const [manualRate, setManualRate] = useState<number | null>(null);

  const convertPrice = (priceInRUB: number): number => {
    if (currency === 'RUB') return priceInRUB;
    
    const rate = manualRate || exchangeRates[currency];
    return priceInRUB / rate;
  };

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency,
      manualRate,
      setManualRate,
      convertPrice,
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }
  return context;
};