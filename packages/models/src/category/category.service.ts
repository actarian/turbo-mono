import { FindParams } from '@websolute/core';
import { getStore } from '@websolute/store';
import { IModelStore } from '../store/store';
import { ICategorized, ICategory } from './category';

export async function getCategories(params: FindParams = {}): Promise<ICategory[]> {
  const store = await getStore<IModelStore>();
  const categories = await store.category.findMany(params);
  return categories;
}

export async function getCategoryTree(item: ICategorized, params: FindParams = {}): Promise<ICategory[]> {
  const categories: ICategory[] = await getCategories(params);
  const store = await getStore();
  const pages = await store.page.findMany(params);
  return resolveCategoryTree(item, pages, categories);
}

export function resolveCategoryTree(item: ICategorized, pages: ICategorized[], categories: ICategory[]): ICategory[] {
  const categoryTree: ICategory[] = [];
  let categoryId = item.categoryId || null;
  let skipLast = false;
  while (categoryId != null) { // !!! loose
    const c = categories.find(c => c.id === categoryId);
    if (c) {
      const b = { ...c };
      categoryTree.unshift(b);
      categoryId = b.categoryId || null;
      if (b.pageSchema) {
        const page = pages.find(p => p.schema === b.pageSchema && p.id === b.pageId);
        if (page) {
          b.slug = page.slug;
        }
      }
      if (b.pageSchema === item.schema && b.pageId === item.id) {
        skipLast = true;
      }
    } else {
      categoryId = null;
    }
  }
  if (!skipLast) {
    categoryTree.push({
      id: item.id,
      schema: 'category',
      slug: item.slug,
      title: item.title,
      pageSchema: item.schema,
      pageId: item.id,
    });
  }
  return categoryTree;
}
