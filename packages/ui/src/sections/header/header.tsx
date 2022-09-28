import { getClassNames, httpGet, IEquatable } from '@websolute/core';
import { useDrawer, useLayout, useModal, useScroll } from '@websolute/hooks';
import { ArrowRight, Hexagon, Menu, ShoppingCart, User } from '@websolute/icons';
import { IRouteLink } from '@websolute/models';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Box, Button, Container, Flex, Modal, Nav, NavLink, Text } from '../../components';
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

const SubMenu = () => (
  <Nav.Col>
    <NavLink href="/#link-1">
      <Button variant="nav" as="a">Link 1</Button>
    </NavLink>
    <NavLink href="/#link-2">
      <Button variant="nav" as="a">Link 2</Button>
    </NavLink>
  </Nav.Col>
)

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const layout = useLayout();
  const scroll = useScroll();
  const [drawer, onOpenDrawer, onCloseDrawer] = useDrawer();
  const [modal, onOpenModal, onCloseModal] = useModal();
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.update);
  const containerProps: HeaderContainerProps = { ...props, scrolled: scroll.top > 0 };

  const [nav, setNav] = useState<IEquatable | null>(null);
  const onNav = (item?: IRouteLink) => {
    // console.log('onNav', item);
    const href = item?.href || null;
    setNav(href !== nav ? href : null);
  }

  /*
  const [submenu, setSubmenu] = useState<IRouteLink[] | null>(null);
  const onSubmenu = (item: IRouteLink) => {
    if (item.items && item.items.length) {
      setSubmenu(item.items);
      onOpenDrawer('submenu');
    }
  }
  */

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await httpGet('/api/auth/me');
        // console.log('Header.getUser', user);
        setUser(user);
      } catch (error) {
        console.log('Header.getUser.error', error);
      }
    };
    getUser();
  }, [setUser]);

  const classNames = getClassNames('header', { fixed: props.fixed, sticky: props.sticky });

  return (
    <>
      <HeaderContainer className={classNames} {...containerProps}>
        <Container.Fluid>
          <Flex.Row gap="1rem" gapSm="3rem">
            <Flex>
              <NavLink href={layout.knownRoutes?.homepage || '/'} passHref={true}>
                <Button as="a">
                  <Hexagon width="3rem" height="3rem" />
                  <Text size="6" padding="0 0.5rem">Hexagon</Text>
                </Button>
              </NavLink>
            </Flex>
            <Flex flex="1" justifyContent="center">
              {layout.navs.primary && <Nav.Row gap="3rem" display="none" displaySm="flex">
                {layout.navs.primary.filter(x => !x.categoryId || x.categoryId < 7).map((x, i) => (
                  (x.href && x.items && x.items.length ?
                    <Box key={i}>
                      <Button variant="nav" onClick={() => onNav(x)}>{x.title}</Button>
                      <HeaderSubmenu item={x as HeaderSubmenuItem} visible={nav === x.href} onSelect={() => onNav()}></HeaderSubmenu>
                    </Box> :
                    <NavLink key={i} href={x.href || ''} passHref={true}>
                      <Button variant="nav" as="a" onClick={() => onNav()}>{x.title}</Button>
                    </NavLink>)
                ))}
              </Nav.Row>}
              {/*layout.navs.primary && <Nav.Row gap="3rem" display="none" displaySm="flex">
                {layout.navs.primary.filter(x => !x.categoryId || x.categoryId < 7).map((x, i) => (
                  (x.items && x.items.length ?
                    <Button variant="nav" onClick={() => onSubmenu(x)}>{x.title}</Button> :
                    <NavLink key={i} href={x.href || ''} passHref={true}>
                      <Button variant="nav" as="a">{x.title}</Button>
                    </NavLink>)
                ))}
                  </Nav.Row>*/}
            </Flex>
            <Flex gap="1rem">
              <Box minWidth="38px">
                {user &&
                  <NavLink href={layout.knownRoutes?.reserved_area || ''} passHref={true}>
                    <Button as="a" variant="circle" size="sm" letterSpacing="0.1em">
                      {getShortName(user)}
                    </Button>
                  </NavLink>
                }
                {user === null &&
                  <Button display='none' displaySm='block' onClick={() => onOpenDrawer('auth')}>
                    <User width="2rem" height="2rem" />
                  </Button>
                }
              </Box>
              <Button onClick={() => onOpenDrawer('cart')}>
                <ShoppingCart width="2rem" height="2rem" />
              </Button>
              <Button display='none' displaySm='flex' onClick={() => onOpenDrawer('markets-and-languages')}>
                <Text marginRight="0.5rem">{layout.locale.toUpperCase()}</Text> <Menu />
              </Button>
              <Button as="a" displaySm='none'><Menu width="2rem" height="2rem" /></Button>
            </Flex>
          </Flex.Row>
        </Container.Fluid>
        {props.children}
      </HeaderContainer>

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

      {/*
      <HeaderSubmenuDrawer visible={drawer == 'submenu'} submenu={submenu} onClose={onCloseDrawer}></HeaderSubmenuDrawer>
       */}
      <AuthDrawer visible={drawer == 'auth'} onClose={onCloseDrawer} />
      <CartMini visible={drawer == 'cart'} onClose={onCloseDrawer} />
      <MarketsAndLanguagesDrawer visible={drawer == 'markets-and-languages'} onClose={onCloseDrawer} />
    </>
  );
}

export default Header;
