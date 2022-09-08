import type { FindParams, ILocalizedString } from '@core';
import type { ILocale } from './locale';
export declare function getLocales(params?: FindParams): Promise<ILocale[]>;
export declare function isLocalizedString(value: any): value is ILocalizedString;
export declare function localizedToString(json: ILocalizedString, locale?: string, defaultLocale?: string): string;
export declare function localizeValue(value: any, locale?: string, defaultLocale?: string): any;
export declare function localizeItem(item: any, locale?: string, defaultLocale?: string): any;
//# sourceMappingURL=locale.service.d.ts.map