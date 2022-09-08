"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAGES = void 0;
require("@models");
require("@models/list/list");
/*
  * Here we define the mapping of the entities types to the physical templates in the pages/[market]/[locale] folder.
*/
exports.PAGES = {
    homepage: 'homepage',
    about: 'about',
    contact: 'contact',
    product_index: 'product_index',
    product_search_csr: 'product_search_csr',
    product_search_ssr: 'product_search_ssr',
    product: 'product',
    notfound: 'notfound',
};
