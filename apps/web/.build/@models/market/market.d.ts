import { IEntity } from '@core';
export interface IMarket extends IEntity {
    id: string;
    title?: string;
    isDefault?: boolean;
    countries?: string[];
    languages?: string[];
}
//# sourceMappingURL=market.d.ts.map