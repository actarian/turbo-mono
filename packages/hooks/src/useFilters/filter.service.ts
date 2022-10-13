import type { IEquatable } from '@websolute/core';
import type { IFeatureType } from '@websolute/models';
import type { FilterParams } from './filter';
import { Filter, FilterMode } from './filter';

export function getFilters<T>(items: T[], featureTypes: IFeatureType[], filterMap: (key: string, item: T, value: IEquatable) => boolean, params?: FilterParams | null): Filter<T>[] {
  return featureTypes.map(featureType => {
    const filter = Filter.fromFeatureType<T>(featureType, (featureType.mode as FilterMode) || FilterMode.OR);
    filter.filter = (item, value) => {
      if (typeof filterMap === 'function') {
        return filterMap(featureType.id, item, value);
      }
      return false;
    };
    filter.removeInvalidOptions(items);
    if (params && params[filter.id] != null) {
      filter.values = params[filter.id] as IEquatable[];
    }
    return filter;
  });
}

export function getFilteredItems<T>(items: T[], selectedFilters: Filter<T>[]): T[] {
  const filteredItems = items.filter(item => {
    let has = true;
    selectedFilters.forEach(filter => {
      has = has && filter.match(item);
    });
    return has;
  });
  return filteredItems;
}

export function setFilters<T>(items: T[], filters: Filter<T>[], filter?: Filter<T>, values?: IEquatable[]): T[] {

  // if passed featureType and values with set filter values
  if (filter) {
    // console.log('setFilter', filter.id, values);
    filter.values = values || [];
  }

  // selecting all filters with values
  const selectedFilters = filters.filter(x => x.values.length > 0);

  // filtering items
  const filteredItems = getFilteredItems<T>(items, selectedFilters);

  // updating filter options
  filters.forEach(filter => {
    const otherFilters = selectedFilters.filter(x => x !== filter);
    const filteredItems = getFilteredItems<T>(items, otherFilters);
    if (filter.options) {
      filter.options.forEach(option => {
        let count = 0;
        if (option.id) {
          let i = 0;
          while (i < filteredItems.length) {
            const item = filteredItems[i];
            if (filter.filter(item, option.id)) {
              count++;
            }
            i++;
          }
        } else {
          count = filteredItems.length;
        }
        option.count = count;
        option.disabled = count === 0;
      });
    }
  });

  return filteredItems;
}

export function filtersToParams<T>(filters: Filter<T>[]): FilterParams | null {
  const params: FilterParams = {};
  let any = false;
  filters.filter(x => x.hasAny()).forEach(filter => {
    params[filter.id] = filter.values;
    any = true;
  });
  if (!any) {
    return null;
  }
  return params;
}
