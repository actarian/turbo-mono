import type { IEntity, IEquatable } from '@core';
export interface IProduct extends IEntity {
    slug: string;
    title: string;
    abstract: string;
    description: string;
    image: string;
    price: number;
    categoryId: IEquatable;
    href?: string;
}
//# sourceMappingURL=product.d.ts.map