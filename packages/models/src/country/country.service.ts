import { INamedEntity } from '@websolute/core';
import { getStore } from '@websolute/store';
import { IModelStore } from '../store/store';

export async function getCountries(locale?: string): Promise<INamedEntity[]> {
  const store = await getStore<IModelStore>();
  const items = await store.i18n_country.findMany({ locale });
  return items;
}
