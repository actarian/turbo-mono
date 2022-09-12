import { useDrawer, useLayout, useModal, useScroll } from '@websolute/hooks';
import { ArrowRight, Hexagon, Menu, ShoppingCart, User } from '@websolute/icons';
import { Button, Container, Flex, Modal, Nav, NavLink, Text } from '../../components';
import { ComponentProps } from '../../components/types';
import { CartMini } from '../../sections';
import AuthDrawer from '../../sections/auth/auth-drawer';

import { IRouteLink } from '@websolute/core';
import styled, { css } from 'styled-components';
import MarketsAndLanguagesDrawer from '../markets-and-languages/markets-and-languages-drawer';

type ContainerProps = {
  fixed?: boolean;
  sticky?: boolean;
  scrolled?: boolean;
}

export type HeaderContainerProps = ComponentProps<ContainerProps, HTMLDivElement>;

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
  menu?: IRouteLink[];
}

export type HeaderProps = ComponentProps<Props, HTMLDivElement>;

const SubMenu = () => (
  <Nav.Col>
    <NavLink href="#link-1">
      <Button variant="nav" as="a">Link 1</Button>
    </NavLink>
    <NavLink href="#link-2">
      <Button variant="nav" as="a">Link 2</Button>
    </NavLink>
  </Nav.Col>
)

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const layout = useLayout();
  const scroll = useScroll();
  const [drawer, onOpenDrawer, onCloseDrawer] = useDrawer();
  const [modal, onOpenModal, onCloseModal] = useModal();
  const containerProps: HeaderContainerProps = { ...props, scrolled: scroll.top > 0 };
  // console.log('layout', layout);
  return (
    <>
      <HeaderContainer {...containerProps}>
        <Container.Fluid>
          <Flex.Row gap="1rem" gapSm="3rem">
            <Flex>
              <NavLink href="/">
                <Button as="a">
                  <Hexagon width="3rem" height="3rem" />
                  <Text size="6" padding="0 0.5rem">Hexagon</Text>
                </Button>
              </NavLink>
            </Flex>
            <Flex flex="1" justifyContent="center">
              {props.menu && <Nav.Row gap="3rem" display="none" displaySm="flex">
                {props.menu.map((x, i) => (
                  <NavLink key={i} href={x.href || ''}>
                    <Button variant="nav" as="a">{x.title}</Button>
                  </NavLink>
                ))}
              </Nav.Row>}
            </Flex>
            <Flex gap="1rem">
              <Button display='none' displaySm='block' onClick={() => onOpenDrawer('auth')}>
                <User width="2rem" height="2rem" />
              </Button>
              <Button onClick={() => onOpenDrawer('cart')}>
                <ShoppingCart width="2rem" height="2rem" />
              </Button>
              <Button display='none' displaySm='flex' onClick={() => onOpenDrawer('markets-and-languages')}>
                <Text marginRight="0.5rem">{layout.locale.toUpperCase()}</Text> <Menu />
              </Button>
              <NavLink href="#menu">
                <Button as="a" displaySm='none'><Menu width="2rem" height="2rem" />
                </Button>
              </NavLink>
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

      <AuthDrawer visible={drawer == 'auth'} onClose={onCloseDrawer} />
      <CartMini visible={drawer == 'cart'} onClose={onCloseDrawer} />
      <MarketsAndLanguagesDrawer visible={drawer == 'markets-and-languages'} onClose={onCloseDrawer} />
    </>
  );
}

export default Header;
