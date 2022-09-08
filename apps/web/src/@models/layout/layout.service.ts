import { ILabel } from '@models/label/label';
import { getLabels } from '@models/label/label.service';
import { ILocale } from '@models/locale/locale';
import { getLocales } from '@models/locale/locale.service';
import { IMarket } from '@models/market/market';
import { getMarkets } from '@models/market/market.service';
import { getRouteLinkTree } from '@models/route/route.service';
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
