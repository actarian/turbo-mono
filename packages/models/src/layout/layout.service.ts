import { ILabel } from '../label/label';
import { getLabels } from '../label/label.service';
import { ILocale } from '../locale/locale';
import { getLocales } from '../locale/locale.service';
import { IMarket } from '../market/market';
import { getMarkets } from '../market/market.service';
import { getRouteLinkTree } from '../route/route.service';
import { ILayout } from './layout';

export async function getLayout(market: string, locale: string): Promise<ILayout> {
  // const store = await getStore<IModelStore>();
  const markets: IMarket[] = await getMarkets({ locale });
  const locales: ILocale[] = await getLocales({ locale });
  const labels: ILabel[] = await getLabels({ locale });
  const tree = await getRouteLinkTree(market, locale);
  // const paths = await getStaticPathsForSchema('reserved_area');
  // console.log(paths);
  /*
  // get known routes eg 'reserved_area', 'login', 'homepage';
  const store = await getStore<IModelStore>();
  const route = await store.route.findOne({ where: { pageSchema: 'reserved_area' }, market, locale });
  console.log(route);
  */
  // console.log('getLayout', market, locale);
  return {
    markets,
    market,
    locales,
    locale,
    labels,
    tree,
  };
}
