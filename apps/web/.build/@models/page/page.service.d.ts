import type { IEquatable } from '@core';
import type { ILayout } from '@models';
import type { IPage } from './page';
export declare function getPage<T extends IPage>(schema: string, id: IEquatable, market?: string, locale?: string): Promise<T | null>;
export declare function getErrorPageLayout(): Promise<{
    layout: ILayout;
    page: IPage;
}>;
//# sourceMappingURL=page.service.d.ts.map