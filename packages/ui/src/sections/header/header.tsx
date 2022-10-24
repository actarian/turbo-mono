import { getClassNames, httpGet, IEquatable } from '@websolute/core';
import { useCart, useDrawer, useLayout, useModal, useMounted, useScroll } from '@websolute/hooks';
import { ArrowRight, Hexagon, MapPin, Menu, Phone, ShoppingCart, User } from '@websolute/icons';
import { IRouteLink } from '@websolute/models';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Accordion, Badge, Box, Button, Container, Drawer, Flex, Modal, Nav, NavLink, Text } from '../../components';
import type { UIComponentProps } from '../../components/types';
import { useUser } from '../../hooks';
import { CartMini } from '../../sections';
import AuthDrawer from '../../sections/auth/auth-drawer';
import { getShortName } from '../../utils';
import MarketsAndLanguagesDrawer from '../markets-and-languages/markets-and-languages-drawer';
import HeaderSubmenu, { HeaderSubmenuItem } from './header-submenu';

type ContainerProps = {
  fixed?: boolean;
  sticky?: boolean;
  scrolled?: boolean;
}

export type HeaderContainerProps = UIComponentProps<ContainerProps>;

const HeaderContainer = styled.div<HeaderContainerProps>`
  display: flex;
  align-items: center;
  min-height: 120px;
  background: var(--color-neutral-900);
  color: var(--color-neutral-100);

  ${props => props.fixed ? css`
    position: fixed;
    top: 0;
    left: 0;
    right: var(--locked-padding-right, 0);
    z-index: 1000;
    transition: background-color ease-in-out 350ms;
    background: ${props.scrolled ? 'var(--color-neutral-900)' : 'transparent'};
    // color: ${props.scrolled ? 'var(--color-neutral-100)' : 'var(--color-neutral-100)'};
  ` : ''};

  ${props => props.sticky ? css`
    position: sticky;
    min-height: 80px;
    top: 0;
    right: var(--locked-padding-right, 0);
    z-index: 1000;
    transition: background-color ease-in-out 350ms;
    background: ${props.scrolled ? 'var(--color-neutral-900)' : 'var(--color-neutral-100)'};
    color: ${props.scrolled ? 'var(--color-neutral-100)' : 'var(--color-neutral-900)'};
    border-bottom: 1px solid ${props.scrolled ? 'var(--color-neutral-900)' : 'var(--color-neutral-300)'};
  ` : ''};
`;

type Props = {
  fixed?: boolean;
  sticky?: boolean;
}

export type HeaderProps = UIComponentProps<Props>;

const StyledAccordion = styled(Accordion)`
    padding: 0;
    border: none;
`;

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const layout = useLayout();
  const mounted = useMounted();
  const scroll = useScroll();
  const [drawer, onOpenDrawer, onCloseDrawer] = useDrawer();
  const [modal, onOpenModal, onCloseModal] = useModal();

  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);

  const containerProps: HeaderContainerProps = { ...props, scrolled: scroll.top > 0 };

  const [nav, setNav] = useState<IEquatable | null>(null);
  const onNav = (item?: IRouteLink) => {
    // console.log('onNav', item);
    const href = item?.href || null;
    setNav(href !== nav ? href : null);
  }

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await httpGet('/api/auth/me');
        console.log('Header.getUser /api/auth/me', user);
        setUser(user);
      } catch (error) {
        console.log('Header.getUser.error', error);
      }
    };
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const count = useCart((state) => state.count);
  const cartItemsCount = mounted ? count() : 0;

  /*
  const setItems = useCart((state) => state.setItems);

  useEffect(() => {
    const getItems = async () => {
      try {
        const items = await httpGet('/api/cart/items');
        console.log('Header.getItems /api/cart/items', items);
        setItems(items);
      } catch (error) {
        console.log('Header.getItems.error', error);
      }
    };
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  */

  // console.log(layout.topLevelRoutes);

  const primaryNavs: IRouteLink[] = (layout.navs.primary || []).filter(x => !['checkout', 'login'].includes(x.id.toString()));

  const classNames = getClassNames('header', { fixed: props.fixed, sticky: props.sticky });

  return (
    <>
      <HeaderContainer className={classNames} {...containerProps}>
        <Container.Fluid>
          <Flex.Row gap="1rem" gapMd="2rem" gapLg="3rem">
            <Flex>
              <NavLink href={layout.topLevelHrefs.homepage || '/'} passHref>
                <Button as="a">
                  <Hexagon width="3rem" height="3rem" />
                  <Text size="6" padding="0 0.5rem">Hexagon</Text>
                </Button>
              </NavLink>
            </Flex>
            <Flex flex="1" justifyContent="center">
              {primaryNavs && <Nav.Row gapSm="2rem" gapLg="3rem" display="none" displayMd="flex">
                {primaryNavs.map((x, i) => (
                  (['product_index'].includes(x.id.toString()) ?
                    <Box key={i}>
                      <Button variant="nav" onClick={() => onNav(x)}>{x.title}</Button>
                      <HeaderSubmenu item={x as HeaderSubmenuItem} visible={nav === x.href} onSelect={() => onNav()}></HeaderSubmenu>
                    </Box> :
                    <NavLink key={i} href={x.href} passHref>
                      <Button as="a" variant="nav" onClick={() => onNav()}>{x.title}</Button>
                    </NavLink>)
                ))}
              </Nav.Row>}
            </Flex>
            <Flex gap="1rem" justifyContentMd="flex-end" minWidthMd="170px">
              {false && layout.topLevelRoutes.store_index &&
                <NavLink href={layout.topLevelRoutes.store_index.href} passHref>
                  <Button as="a" display='none' displaySm='block' title={layout.topLevelRoutes.store_index.title}>
                    <MapPin width="24px" height="24px" />
                  </Button>
                </NavLink>
              }
              {false && layout.topLevelRoutes.contact &&
                <NavLink href={layout.topLevelRoutes.contact.href} passHref>
                  <Button as="a" display='none' displaySm='block' title={layout.topLevelRoutes.contact.title}>
                    <Phone width="24px" height="24px" />
                  </Button>
                </NavLink>
              }
              {user &&
                <NavLink href={layout.topLevelHrefs.reserved_area} passHref>
                  <Button as="a" variant="circle" size="sm" letterSpacing="0.1em">
                    {getShortName(user)}
                  </Button>
                </NavLink>
              }
              {user === null &&
                <Button display='none' displaySm='block' onClick={() => onOpenDrawer('auth')}>
                  <User width="24px" height="24px" />
                </Button>
              }
              <Button position="relative" onClick={() => onOpenDrawer('cart')}>
                <ShoppingCart width="24px" height="24px" />
                {cartItemsCount > 0 && <Badge position="absolute" top="-0.4em" right="-0.8em">{cartItemsCount}</Badge>}
              </Button>
              <Button display='none' displayMd='flex' onClick={() => onOpenDrawer('markets-and-languages')}>
                <Text marginRight="0.5rem">{layout.locale.toUpperCase()}</Text> <Menu />
              </Button>
              <Button as="a" displayMd='none' onClick={() => onOpenDrawer('menu')}>
                <Menu width="24px" height="24px" />
              </Button>
            </Flex>
          </Flex.Row>
        </Container.Fluid>
        {props.children}
      </HeaderContainer>

      {/* menu mobile */}
      <Drawer visible={drawer == 'menu'} onClose={onCloseDrawer} placement="right">
        <Drawer.Title>
          <span>&nbsp;</span>
        </Drawer.Title>
        <Drawer.Content flex="1" width="100vw" maxWidth="Min(calc(100vw - 60px), 640px)">
          {primaryNavs && <Nav.Col gap="2rem">
            {primaryNavs.map((x, i) => (
              (['product_index'].includes(x.id.toString()) ?
                <StyledAccordion key={i} title={
                  <Text size="7">{x.title}</Text>
                }>
                  <Nav.Col gap="1rem" marginTop="1rem">
                    {x.items?.map((item, i) => (
                      <NavLink key={i} href={item.href} passHref>
                        <Button as="a" variant="nav">{item.title}</Button>
                      </NavLink>
                    ))}
                  </Nav.Col>
                </StyledAccordion> :
                <NavLink key={i} href={x.href} passHref>
                  <Button as="a" variant="nav" onClick={() => onNav()}>
                    <Text size="7">{x.title}</Text>
                  </Button>
                </NavLink>)
            ))}
          </Nav.Col>}
        </Drawer.Content>
      </Drawer>

      <Modal width="30rem" visible={modal == 'foreign-market'} onClose={onCloseModal}>
        <Modal.Title>
          <Text size="7" fontWeight="700">Foreign Market detected</Text>
        </Modal.Title>
        <Modal.Subtitle>Attention Please.</Modal.Subtitle>
        <Modal.Content>
          <p>You seem to be browsing a different market than yours.</p>
        </Modal.Content>
        <Modal.Button variant="default" passive onClick={onCloseModal}>Proceed</Modal.Button>
        <Modal.Button variant="primary"><span>Change to Italy</span> <ArrowRight /></Modal.Button>
      </Modal>

      <AuthDrawer visible={drawer == 'auth'} onClose={onCloseDrawer} />
      <CartMini visible={drawer == 'cart'} onClose={onCloseDrawer} />
      <MarketsAndLanguagesDrawer visible={drawer == 'markets-and-languages'} onClose={onCloseDrawer} />
    </>
  );
}

export default Header;
