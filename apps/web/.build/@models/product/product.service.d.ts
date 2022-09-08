import type { FindParams, IEquatable } from '@core';
import type { IProduct } from './product';
export declare function getProducts(params?: FindParams): Promise<IProduct[]>;
export declare function getProduct(id: IEquatable, params?: FindParams): Promise<IProduct>;
//# sourceMappingURL=product.service.d.ts.map