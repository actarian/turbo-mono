import { QueryParams } from '@websolute/core';
import { getStore } from '@websolute/store';
import { IModelStore } from '../store/store';
import { ICategorized, ICategory } from './category';

export async function getCategories(params: QueryParams = {}): Promise<ICategory[]> {
  const store = await getStore<IModelStore>();
  const categories = await store.category.findMany(params);
  return categories;
}

export async function getSegments(item: ICategorized, params: QueryParams = {}): Promise<ICategory[]> {
  const categories: ICategory[] = await getCategories(params);
  return getRouteSegments(item.schema, item, categories);
}

export function getRouteSegments(schema: string, item: ICategorized, categories: ICategory[]): ICategory[] {
  const segments: ICategory[] = [];
  let parentId = item.category || null;
  while (parentId != null) { // !!! loose
    const parentCategory = categories.find(c => c.id === parentId);
    if (parentCategory) {
      if (parentCategory.slug) {
        const segment = { ...parentCategory };
        segments.unshift(segment);
      }
      parentId = parentCategory.category || null;
    } else {
      parentId = null;
    }
  }
  if (item.isDefault !== true) {
    segments.push({
      id: item.id,
      title: item.title,
      slug: item.slug,
      schema: schema,
      page: item.id,
      media: item.media,
    });
  }
  return segments;
}
