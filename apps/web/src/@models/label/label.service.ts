import type { FindParams } from '@core';
import { getStore } from '@core/store/store.service';
import type { ILabel } from './label';

export async function getLabels(params: FindParams = {}): Promise<ILabel[]> {
  const store = await getStore();
  const items = await store.label.findMany(params);
  return items;
}

export function resolveLabel(labels: ILabel[], id: string): string {
  const label = labels.find(x => x.id === id);
  return label && label.text ? label.text.toString() : id;
}

/*
export function localizedLabel(labels: Label[], id: string, locale: string = 'en', defaultLocale: string = 'en'): Promise<Label> {
  const label = labels.find(x => x.id === id);
  if (label) {
    return store.localizeValue(label, locale, defaultLocale);
  }
}
*/
