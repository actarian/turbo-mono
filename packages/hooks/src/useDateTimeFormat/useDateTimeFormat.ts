import { useLayout } from '../useLayout/useLayout';

export function useDateTimeFormat(
  options: Intl.DateTimeFormatOptions = {
    // weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  },
  locale?: string
): (value: Date | string) => string {

  const layout = useLayout();

  const dateTimeFormat = (value: Date | string): string => {
    const date = value instanceof Date ? value : new Date(value);
    const formattedValue = new Intl.DateTimeFormat(locale || layout.locale, options).format(date);
    return formattedValue;
  };

  return dateTimeFormat;
}
