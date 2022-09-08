import type { FindParams } from '@core';
import type { ICategorized, ICategory } from './category';
export declare function getCategories(params?: FindParams): Promise<ICategory[]>;
export declare function getCategoryTree(item: ICategorized, params?: FindParams): Promise<ICategory[]>;
export declare function resolveCategoryTree(item: ICategorized, items: ICategorized[], categories: ICategory[]): ICategory[];
//# sourceMappingURL=category.service.d.ts.map