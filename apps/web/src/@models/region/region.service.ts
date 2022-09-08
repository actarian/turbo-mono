import type { INamedEntity } from '@core';
import { getStore } from '@core/store/store.service';

export async function getRegions(locale?: string): Promise<INamedEntity[]> {
  const store = await getStore();
  const items = await store.region.findMany({ locale });
  return items;
}
