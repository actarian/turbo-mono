import type { ITile } from '@models';
import type { IEquatable } from '@websolute/core';

export function filterProductItem(key: string, item: ITile, value: IEquatable) {
  switch (key) {
    case 'title':
      return item.title.toLowerCase().includes(value.toString().toLowerCase());
    default:
      return item.featureIds.includes(value);
  }
}
