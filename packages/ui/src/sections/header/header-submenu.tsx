import { getClassNames } from '@websolute/core';
import { IRouteLink } from '@websolute/models';
import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { Container, Grid } from '../../components';
import { UIStyledComponentProps } from '../../components/types';
import { HeaderCard } from './header-card';

type Props = {
  item: HeaderSubmenuItem;
  visible: boolean;
  onSelect?: (item?: IRouteLink) => void;
};

export type HeaderSubmenuItem = {
  href: string;
  title: string;
  items: IRouteLink[];
};

export type HeaderSubmenuProps = UIStyledComponentProps<Props>;

const StyledHeaderSubmenu = styled.div`
  position: absolute;
  left: 0;
  top: 120px;
  width: 100%;
  padding: 3rem 0;
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-900);
  box-shadow: var(--shadow-lg);

  .header.sticky & {
    top: 80px;
    box-shadow: var(--shadow-sm);
  }

  &:not(.visible) {
    display: none;
  }

  .header-submenu__items {
    ${staggerBottom()}
  }
`;

export const HeaderSubmenu: React.FC<HeaderSubmenuProps> = ({ item, visible, onSelect, ...props }: HeaderSubmenuProps) => {

  const onSelect_ = (item?: IRouteLink) => {
    onSelect && onSelect(item);
  };

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => visible && onSelect_());

  const classNames = getClassNames('header-submenu', { visible });
  return (
    <StyledHeaderSubmenu className={classNames} ref={ref}>
      <Container.Fluid>
        {item.items && (
          <Grid.Row className="header-submenu__items" columnGap="2rem" rowGap="2rem">
            {item.items.map((item, i) => (
              <Grid xs={6} sm={4} md={3} lg={2} key={i}>
                <HeaderCard item={item} onSelect={onSelect_}></HeaderCard>
              </Grid>
            ))}
          </Grid.Row>
        )}
      </Container.Fluid>
    </StyledHeaderSubmenu>
  );
};

function staggerBottom(items: number = 20, delay: number = 0.1, gap: number = .05) {
  return css`
  	&>* {
      animation: stagger-bottom 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) backwards;
      ${new Array(items).fill(0).map((x, i) => css`
        &:nth-child(${i}) {
          animation-delay: var(--delay, ${delay + i * gap}s);
        }
      `)}
    }

    @keyframes stagger-bottom {
      0% {
        transform: translateY(10px);
        opacity: 0;
      }

      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;
}

import { useEventListener } from '@websolute/hooks';
import { RefObject } from 'react';

type Handler = (event: MouseEvent) => void;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
): void {
  useEventListener(mouseEvent, event => {
    const el = ref?.current;
    // Do nothing if clicking ref's element or descendent elements
    if (!el || el.contains(event.target as Node)) {
      return;
    }
    handler(event);
  });
}
