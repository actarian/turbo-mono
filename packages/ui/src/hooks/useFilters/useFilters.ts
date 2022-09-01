import { useCallback, useEffect, useMemo, useState } from 'react';
import { IEquatable } from '../../core';
import type { Filter, FilterParams, IFeatureType } from './filter';
import { getFilters, setFilters } from './filter.service';

export function useFilters<T>(items: T[], featureTypes: IFeatureType[], filterItem: (key: string, item: T, value: IEquatable) => boolean, initialValues?: FilterParams | null): UseFiltersResultType<T> {
  // console.log('useFilters', params);

  // creating filters with useMemo because is an heavy operation
  const filters = useMemo(() => {
    return getFilters<T>(items, featureTypes, filterItem, initialValues);
  }, [items, featureTypes, filterItem, initialValues]);

  const [filteredItems, setFilteredItems] = useState<T[]>(() => setFilters(items, filters));

  const itemsWithOmittedKeys = useCallback((...keys: string[]) => {
    const filtersWithOmittedKeys = filters.filter(x => !keys.includes(x.id));
    const filteredItems = setFilters(items, filtersWithOmittedKeys);
    return filteredItems;
  }, [items, filters]);

  // setFilter is called when user select a filter value
  const setFilter = useCallback((filter?: Filter<T>, values?: IEquatable[]) => {
    const filteredItems = setFilters(items, filters, filter, values);
    setFilteredItems(filteredItems);
  }, [items, filters]);

  // initial call to setFilter
  useEffect(() => {
    setFilter();
    return () => { };
  }, [setFilter]);

  return { filteredItems, filters, setFilter, itemsWithOmittedKeys };
}

export type UseFiltersResultType<T> = {
  filteredItems: T[];
  filters: Filter<T>[];
  setFilter: (filter?: Filter<T>, values?: IEquatable[]) => void;
  itemsWithOmittedKeys: (...keys: string[]) => T[];
}
