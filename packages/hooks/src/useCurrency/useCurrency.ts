import { useMemo } from 'react';
import { useLayout } from '../useLayout/useLayout';

export function useCurrency(currency: string = 'EUR', locale?: string): (value: number) => string {
  const layout = useLayout();
  const currentLocale = locale || layout.locale;

  const formatter = useMemo(() => {
    const options = { style: 'currency', currency };
    const formatter = new Intl.NumberFormat(currentLocale, options).format;
    return formatter;
  }, [currency, currentLocale]);

  return formatter;
}


/*

export function useCurrency(value: number, currency: string = 'EUR', locale?: string): string {

  const layout = useLayout();

  const currentLocale = locale || layout.locale;

  return useMemo(() => {
    const options = { style: 'currency', currency };
    const formattedValue = new Intl.NumberFormat(currentLocale, options).format(value);
    return formattedValue;
  }, [value, currency, currentLocale]);
}

*/
