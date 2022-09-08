import type { INamedEntity } from '@core';
import { getStore } from '@core/store/store.service';

export async function getProvinces(locale?: string): Promise<INamedEntity[]> {
  const store = await getStore();
  const items = await store.province.findMany({ locale });
  return items;
}
