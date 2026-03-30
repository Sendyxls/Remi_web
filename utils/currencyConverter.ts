import { getCurrencyByCode } from "@/constants/currencies";

export const convertPrice = (
  priceInRub: number,
  targetCurrencyCode: string,
  customRates?: Record<string, number>
): number => {
  const targetCurrency = getCurrencyByCode(targetCurrencyCode);
  const rate = customRates?.[targetCurrencyCode] ?? targetCurrency.rate;
  return parseFloat((priceInRub * rate).toFixed(2));
};

export const formatPrice = (
  price: number,
  currencyCode: string
): string => {
  const currency = getCurrencyByCode(currencyCode);
  return `${price.toFixed(2)} ${currency.symbol}`;
};