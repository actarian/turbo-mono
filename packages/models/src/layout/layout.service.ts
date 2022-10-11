import type { ILabel } from '../label/label';
import { getLabels } from '../label/label.service';
import type { ILocale } from '../locale/locale';
import { getLocales } from '../locale/locale.service';
import type { IMarket } from '../market/market';
import { getMarkets } from '../market/market.service';
import type { IRouteLink } from '../route/route';
import { getRouteLinkTree } from '../route/route.service';
import type { ILayout } from './layout';

export async function getLayout(market: string, locale: string): Promise<ILayout> {
  // const store = await getStore<IModelStore>();
  const markets: IMarket[] = await getMarkets({ locale });
  const locales: ILocale[] = await getLocales({ locale });
  const labels: ILabel[] = await getLabels({ locale });
  const tree = await getRouteLinkTree(market, locale);
  const firstLevelRoutes = tree?.items || [];
  const flatTopLevelRoutes = tree ? [tree, ...firstLevelRoutes] : [];
  const topLevelRoutes = flatTopLevelRoutes.reduce((object, route: IRouteLink) => {
    object[route.id] = route;
    return object;
  }, {} as { [key: string]: IRouteLink });
  const topLevelHrefs = flatTopLevelRoutes.reduce((object, route: IRouteLink) => {
    if (route.href) {
      object[route.id] = route.href;
    }
    return object;
  }, {} as { [key: string]: string });
  const navs = {
    primary: (tree && tree.items ? tree.items : []),
    secondary: [],
    footer: [],
  };
  /*
  // get known routes eg 'reserved_area', 'login', 'homepage';
  const knownRoutes = await getRoutesForSchemas(['homepage', 'login', 'reserved_area'], market, locale);
  // console.log('knownRoutes', knownRoutes);
  */
  // console.log('getLayout', market, locale);
  return {
    markets,
    market,
    locales,
    locale,
    labels,
    tree,
    navs,
    topLevelRoutes,
    topLevelHrefs,
  };
}
