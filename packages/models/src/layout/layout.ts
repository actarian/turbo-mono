import { ILabel } from '../label/label';
import { ILocale } from '../locale/locale';
import { IMarket } from '../market/market';
import { IRouteLink } from '../route/route';

export type ILayout = {
  market: string;
  locale: string;
  markets: IMarket[];
  locales: ILocale[];
  labels: ILabel[];
  tree?: IRouteLink;
  navs: {
    [key: string]: IRouteLink[],
  };
  topLevelRoutes: {
    [key: string]: IRouteLink;
  };
  topLevelHrefs: {
    [key: string]: string;
  };
  /*
  knownRoutes?: {
    [key: string]: string;
  };
  */
}
