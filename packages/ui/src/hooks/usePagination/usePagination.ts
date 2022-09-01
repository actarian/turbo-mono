import { useEffect, useState } from 'react';
import { getPagedItems } from './pagination.service';

export function usePagination<T>($items: T[], $page: number = 1, $perPage: number = 15) {

  const total = $items.length;

  const [page, setPage] = useState($page);
  const [perPage, setPerPage] = useState($perPage);
  const [items, setItems] = useState(getPagedItems<T>($items, $page, $perPage));

  const pages = Math.ceil(total / perPage);

  useEffect(() => {
    // console.log('setPagination');
    setItems(getPagedItems<T>($items, page, perPage));
  }, [$items]);

  function goToPage(num: number) {
    if (num > 0 && num <= total) {
      // console.log('goToPage', num);
      setPage(num);
      setItems(getPagedItems<T>($items, num, perPage));
    }
  }

  function nextPage() {
    goToPage(page + 1);
  }

  function previousPage() {
    goToPage(page - 1);
  }

  return { items, page, pages, total, nextPage, previousPage, goToPage, setPerPage };
}
