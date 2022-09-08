import { IList } from './list';
export declare function getLists(locale?: string): Promise<IList[]>;
export declare function getListByKeys(keys: string[], locale?: string): Promise<{
    [key: string]: IList[];
}>;
//# sourceMappingURL=list.service.d.ts.map