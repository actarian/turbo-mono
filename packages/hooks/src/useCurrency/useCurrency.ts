import { useMemo } from "react";

export function useCurrency(value: number, currency:string = 'EUR', locale:string = 'en-US'): string {
  return useMemo(() => {
    const options = { style: 'currency', currency };
    const formattedValue = new Intl.NumberFormat(locale, options).format(value);
    return formattedValue;
  }, [value, currency, locale]);
}
