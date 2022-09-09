import type { ILabel } from '../label/label';
import type { ILocale } from '../locale/locale';
import type { IMarket } from '../market/market';
import type { IRouteLink } from '../route/route';

export interface ILayout {
  market: string;
  locale: string;
  markets: IMarket[];
  locales: ILocale[];
  labels: ILabel[];
  tree?: IRouteLink;
}
