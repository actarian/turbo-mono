import { useMemo } from 'react';
import { useLayout } from '../useLayout/useLayout';

export function useNumber(options?: Intl.NumberFormatOptions, locale?: string): (value: number) => string {
  const layout = useLayout();
  const currentLocale = locale || layout.locale;
  const flatOptions = options ? Object.entries(options).map(([k, v]) => `${k}:${v}`).join('') : undefined;
  const formatter = useMemo(() => {
    const formatter = new Intl.NumberFormat(currentLocale, options).format;
    return formatter;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocale, flatOptions]);

  return formatter;
}
