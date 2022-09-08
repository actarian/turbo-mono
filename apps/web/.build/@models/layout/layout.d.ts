import type { ILabel, ILocale, IMarket, IRouteLink } from '@models';
export interface ILayout {
    market: string;
    locale: string;
    markets: IMarket[];
    locales: ILocale[];
    labels: ILabel[];
    tree?: IRouteLink;
}
//# sourceMappingURL=layout.d.ts.map