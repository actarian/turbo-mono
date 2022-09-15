import type { FindParams } from '@websolute/core';
import { getStore } from '@websolute/store';
import { IModelStore } from '../store/store';
import type { IFeatureType } from './feature_type';

export async function getFeatureTypes(params: FindParams = {}): Promise<IFeatureType[]> {
  const store = await getStore<IModelStore>();
  const items = await store.feature_type.findMany(params);
  return items;
}
