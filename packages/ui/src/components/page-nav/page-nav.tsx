import { getClassNames } from '@websolute/core';
import { useEventListener, useIsomorphicLayoutEffect, useScrollTo } from '@websolute/hooks';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Box, Button, Container, Flex, Nav } from '..';
import { UIComponentProps } from '../types';

type ContainerProps = {
  fixed?: boolean;
  sticky?: boolean;
  scrolled?: boolean;
}

export type PageNavContainerProps = UIComponentProps<ContainerProps>;

const PageNavContainer = styled.div`
`;

const PageNavInner = styled.div<PageNavContainerProps>`
  display: flex;
  align-items: center;
  min-height: 80px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1100;
  background: var(--color-neutral-900);
  color: var(--color-neutral-100);
  transition: ease-in-out 350ms;
  transition-property: background-color, transform;

  ${props => css`
    background: ${props.scrolled ? 'var(--color-neutral-900)' : 'var(--color-neutral-100)'};
    color: ${props.scrolled ? 'var(--color-neutral-100)' : 'var(--color-neutral-900)'};
    border-bottom: 1px solid ${props.scrolled ? 'var(--color-neutral-900)' : 'var(--color-neutral-300)'};
    transform: translateY(${props.scrolled ? 0 : '-100%'});
  `}
`;

type PageNavItem = { href: string, title: string }

type Props = {
  items: PageNavItem[];
  // !!! todo fixed / sticky boolean
}

export type PageNavProps = UIComponentProps<Props>;

export const PageNav: React.FC<PageNavProps> = (props: PageNavProps) => {

  const innerRef = React.createRef<HTMLDivElement>();

  const [id, setId] = useState<string | null>(null);

  const [scrolled, setScrolled] = useState(false);

  const innerProps: PageNavContainerProps = { ...props, scrolled };

  const scrollTo = useScrollTo();

  const onScroll = () => {
    if (innerRef.current) {
      const scrollTop = window.scrollY;
      const ids = props.items.map(x => x.href);
      const anchorTargets: HTMLElement[] = ids.map(id => document.querySelector(id)).filter(x => x) as HTMLElement[];
      const activeTarget = anchorTargets.reduce((p: HTMLElement | null, c: HTMLElement, i: number) => {
        // const previousTop = p ? (p.offsetTop - window.scrollY) : Number.NEGATIVE_INFINITY;
        const top = c.offsetTop - window.scrollY;
        // if (top < window.innerHeight && previousTop < 0) {
        if (top < window.innerHeight / 2) {
          return c;
        } else {
          return p;
        }
      }, null);
      // console.log('activeTarget', activeTarget?.id);
      setId(activeTarget?.id || null);
      const top = innerRef.current.offsetTop - scrollTop;
      const lastTarget = anchorTargets.length ? anchorTargets[anchorTargets.length - 1] : null;
      const lastTargetBottom = lastTarget ? (lastTarget.offsetTop + lastTarget.offsetHeight - window.scrollY) : Number.NEGATIVE_INFINITY;
      const isScrolled = top < 0 && lastTargetBottom > 0;
      setScrolled(isScrolled);
    }
  };

  useEventListener('scroll', onScroll);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    onScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classNames = getClassNames('page-nav');

  return (
    <>
      <PageNavContainer ref={innerRef} className={classNames}>
        <PageNavInner {...innerProps}>
          <Container.Fluid>
            <Flex.Row justifyContent="space-between">
              <Nav.Row gap="3rem" display="none" displaySm="flex">
                {props.items.map((item, i) => (
                  <Box key={i}>
                    <Button className={getClassNames({ active: item.href === `#${id}` })} as="a" variant="nav" href={item.href} onClick={scrollTo}>{item.title}</Button>
                  </Box>
                ))}
              </Nav.Row>
              <Flex>
                {props.children}
              </Flex>
            </Flex.Row>
          </Container.Fluid>
        </PageNavInner>
      </PageNavContainer>
    </>
  );
}
