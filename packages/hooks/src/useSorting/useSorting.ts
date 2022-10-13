import { IEquatable } from '@websolute/core';
import { useCallback, useEffect, useState } from 'react';

export function useSorting<T>($items: T[], $callback: (items: T[], sort?: IEquatable) => T[], $sort?: IEquatable) {

  const callback = useCallback($callback, []);
  const [sort, setSort] = useState($sort);
  const [items, setItems] = useState(callback($items.slice(), $sort));

  useEffect(() => {
    // console.log('setPagination');
    setItems(callback($items.slice(), $sort));
  }, [$items]);

  function doSort(sort?: IEquatable) {
    setSort(sort);
    setItems(callback($items.slice(), sort));
  }

  return { items, sort, setSort: doSort };
}
