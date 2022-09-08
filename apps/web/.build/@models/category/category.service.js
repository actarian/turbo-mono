"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveCategoryTree = exports.getCategoryTree = exports.getCategories = void 0;
const store_service_1 = require("@core/store/store.service");
async function getCategories(params = {}) {
    const store = await (0, store_service_1.getStore)();
    const categories = await store.category.findMany(params);
    return categories;
}
exports.getCategories = getCategories;
async function getCategoryTree(item, params = {}) {
    const categories = await getCategories(params);
    const store = await (0, store_service_1.getStore)();
    const pages = await store.page.findMany(params);
    return resolveCategoryTree(item, pages, categories);
}
exports.getCategoryTree = getCategoryTree;
function resolveCategoryTree(item, items, categories) {
    const categoryTree = [];
    let categoryId = item.categoryId || null;
    let skipLast = false;
    while (categoryId != null) { // !!! loose
        const c = categories.find(c => c.id === categoryId);
        if (c) {
            const b = { ...c };
            categoryTree.unshift(b);
            categoryId = b.categoryId || null;
            if (b.pageSchema) {
                const page = items.find(p => p.schema === b.pageSchema && p.id === b.pageId);
                if (page) {
                    b.slug = page.slug;
                }
            }
            if (b.pageSchema === item.schema && b.pageId === item.id) {
                skipLast = true;
            }
        }
        else {
            categoryId = null;
        }
    }
    if (!skipLast) {
        categoryTree.push({
            id: item.id,
            schema: 'category',
            name: item.schema,
            title: item.title,
            slug: item.slug,
            pageSchema: item.schema,
            pageId: item.id,
        });
    }
    return categoryTree;
}
exports.resolveCategoryTree = resolveCategoryTree;
