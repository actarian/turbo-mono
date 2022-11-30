import { INamedEntity } from '@websolute/core';
import { getStore } from '@websolute/store';
import { IModelStore } from '../store/store';

export async function getRegions(locale?: string): Promise<INamedEntity[]> {
  const store = await getStore<IModelStore>();
  const items = await store.i18n_region.findMany({ locale });
  return items;
}
