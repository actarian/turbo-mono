import type { IEquatable } from '@websolute/core';
import type { ITile } from 'src/models';

export function filterProductItem(key: string, item: ITile, value: IEquatable) {
  switch (key) {
    case 'title':
      return item.title.toLowerCase().includes(value.toString().toLowerCase());
    default:
      return item.featureIds.includes(value);
  }
}
