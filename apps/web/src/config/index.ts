/*
  * Here we define the mapping of the entities types to the physical templates in the pages/[market]/[locale] folder.
*/
export const PAGES = {
  homepage: 'homepage',
  product_index: 'product_index',
  product_category: 'product_category',
  product_detail: 'product_detail',
  magazine_index: 'magazine_index',
  magazine_category: 'magazine_category',
  magazine_detail: 'magazine_detail',
  store_index: 'store_index',
  shop_index: 'shop_index',
  shop_category: 'shop_category',
  shop_detail: 'shop_detail',
  contact: 'contact',
  login: 'login',
  reserved_area: 'reserved_area',
  checkout: 'checkout',
  checkout_result: 'checkout_result',
  notfound: 'notfound',
};

export const COLLECTIONS = [
  ...Object.keys(PAGES),
  'category',
  'country',
  'feature_type',
  'label',
  'list',
  'locale',
  'market',
  'page',
  'province',
  'region',
  'route',
  'template',
];
