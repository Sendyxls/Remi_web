export type Currency = {
  code string;
  symbol string;
  name string;
  rate number;  Rate to RUB
};

export const currencies Currency[] = [
  {
    code RUB,
    symbol ₽,
    name Russian Ruble,
    rate 1,
  },
  {
    code CNY,
    symbol ¥,
    name Chinese Yuan,
    rate 1  10.9657,
  },
  {
    code USD,
    symbol $,
    name US Dollar,
    rate 1  78.3892,
  },
  {
    code EUR,
    symbol €,
    name Euro,
    rate 1  91.7370,
  },
];

export const getCurrencyByCode = (code string) Currency = {
  return currencies.find((currency) = currency.code === code)  currencies[0];
};