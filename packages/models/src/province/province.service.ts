import type { INamedEntity } from '@websolute/core';
import { getStore } from '@websolute/store';
import { IModelStore } from '../store/store';

export async function getProvinces(locale?: string): Promise<INamedEntity[]> {
  const store = await getStore<IModelStore>();
  const items = await store.province.findMany({ locale });
  return items;
}
