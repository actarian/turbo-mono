import { ILabel } from '../label/label';
import { getLabels } from '../label/label.service';
import { ILocale } from '../locale/locale';
import { getLocales } from '../locale/locale.service';
import { IMarket } from '../market/market';
import { getMarkets } from '../market/market.service';
import { getRouteLinkTree } from '../route/route.service';
import { ILayout } from './layout';

export async function getLayout(market: string, locale: string): Promise<ILayout> {
  // const store = await getStore();
  const markets: IMarket[] = await getMarkets({ locale });
  const locales: ILocale[] = await getLocales({ locale });
  const labels: ILabel[] = await getLabels({ locale });
  const tree = await getRouteLinkTree(market, locale);
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
