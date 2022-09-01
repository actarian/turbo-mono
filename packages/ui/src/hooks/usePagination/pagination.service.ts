export interface IPaginationInfo<T> {
  items: T[],
  total: number,
  pages: number,
  page: number,
  perPage: number,
}

export function getPagedItems<T>(items: T[], page: number, perPage: number): T[] {
  const from = (page - 1) * perPage;
  const to = Math.min(page * perPage, items.length);
  return items.slice(from, to);
}

export function getPaginationInfo<T>(items: T[], page: number = 1, perPage: number = 15): IPaginationInfo<T> {
  const total = items.length;
  const pages = Math.ceil(total / perPage);
  const pagedItems = getPagedItems(items, page, perPage);
  // console.log(items.length, '->', pagedItems.length);
  return { items: pagedItems, total, pages, page, perPage };
}
