import { useNumber } from '../useNumber/useNumber';

export function useUnit(unit: string = 'kilometer', locale?: string): (value: number) => string {
  return useNumber({ style: 'unit', unit, minimumFractionDigits: 2, maximumFractionDigits: 2 }, locale);
}
