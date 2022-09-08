import type { INamedEntity } from '@core';
import { getStore } from '@core/store/store.service';

export async function getCountries(locale?: string): Promise<INamedEntity[]> {
  const store = await getStore();
  const items = await store.country.findMany({ locale });
  return items;
}
