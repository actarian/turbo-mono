import { useLayout, usePage } from '@websolute/hooks';
import { ReactNode, useCallback } from 'react';
import { Button, Drawer, Nav, NavLink, Text } from '../../components';

export type MarketsAndLanguagesDrawerProps = {
  children?: ReactNode;
  visible: boolean;
  onClose: () => void;
};

export const MarketsAndLanguagesDrawer: React.FC<MarketsAndLanguagesDrawerProps> = ({ visible, onClose }: MarketsAndLanguagesDrawerProps) => {
  const { markets, market: currentMarket, locales, locale: currentLocale } = useLayout();
  const { href, alternates } = usePage();

  const items = markets.map(x => ({
    ...x,
    locales: (x.languages && x.languages.length) ? locales.filter(l => x.languages ? x.languages.includes(l.id) : true) : locales,
  }));

  const getHref = useCallback((market: string, locale: string, currentMarket: string, currentLocale: string) => {
    const items = alternates || [];
    const alternateItem = items.find((x: any) => x.market === market && x.locale === locale);
    if (alternateItem) {
      return alternateItem.id.toString();
    } else if (market === currentMarket && locale === currentLocale && href) {
      return href;
    } else {
      return `/${locale}-${market}`;
    }
  }, [alternates, href]);

  return (
    <Drawer visible={visible} onClose={onClose} placement="right">
      <Drawer.Title>
        <span>&nbsp;</span>
      </Drawer.Title>
      <Drawer.Content flex="1" width="100vw" maxWidth="400px">
        {items && items.map(item => (
          <Nav.Col key={`${item.id}`} marginBottom="2rem" fontSize="0.9rem">
            <Text size="8" fontWeight="700">{item.title}</Text>
            {item.locales && item.locales.map(locale => (
              <NavLink key={`${locale.id}`} href={getHref(item.id, locale.id, currentMarket, currentLocale)} passHref>
                <Button as="a" variant="nav" onClick={onClose}>{locale.title}</Button>
              </NavLink>
            ))}
          </Nav.Col>
        ))}
      </Drawer.Content>
    </Drawer>
  );
};
