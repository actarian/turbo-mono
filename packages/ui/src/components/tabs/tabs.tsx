import { Highlight } from '@ui-components';
import { useClasses } from '@ui-hooks';
import React, { CSSProperties, MouseEvent, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { useRect } from '../dropdown/dropdown-layout';
import { isGeistElement } from '../popover/popover-collections';
import { TabsConfig, TabsContext, TabsHeaderItem } from './tabs-context';
import TabsItem from './tabs-item';

interface Props {
  initialValue?: string;
  value?: string;
  hideDivider?: boolean;
  hideBorder?: boolean;
  highlight?: boolean;
  onChange?: (val: string) => void;
  className?: string;
  hoverHeightRatio?: number;
  hoverWidthRatio?: number;
  activeClassName?: string;
  activeStyle?: CSSProperties;
  leftSpace?: CSSProperties['marginLeft'];
  align?: CSSProperties['justifyContent'];
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type TabsProps = Props & NativeAttrs;

const StyledTabs = styled.div<Props>`
  font-size: 1;
  width: initial;
  height: auto;
  padding: 0;
  margin: 0;

  header {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    overflow-y: hidden;
    overflow-x: scroll;
    scrollbar-width: none;
    position: relative;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .scroll-container {
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    padding-left: ${props => props.leftSpace};
    justify-content: ${props => props.align};
    border-bottom: 1px solid var(--color-neutral-300);

    &.hide-divider {
      border-color: transparent;
    }
  }

  .content {
    padding-top: 0.625rem;
  }
`;

const Tabs: React.FC<React.PropsWithChildren<TabsProps>> = ({
  className = '',
  hideDivider = false,
  highlight = true,
  hoverHeightRatio = 0.7,
  hoverWidthRatio = 1.15,
  activeClassName = '',
  activeStyle = {},
  leftSpace = '12px' as CSSProperties['marginLeft'],
  align = 'left' as CSSProperties['justifyContent'],
  initialValue: userCustomInitialValue,
  value,
  hideBorder,
  children,
  onChange,
  ...props
}: React.PropsWithChildren<TabsProps>) => {
  const [tabs, setTabs] = useState<Array<TabsHeaderItem>>([]);

  const [selfValue, setSelfValue] = useState<string | undefined>(userCustomInitialValue);

  const ref = useRef<HTMLDivElement | null>(null);

  const [displayHighlight, setDisplayHighlight] = useState<boolean>(false);

  const { rect, setRect } = useRect();

  const register = (next: TabsHeaderItem) => {
    setTabs(last => {
      const hasItem = last.find(item => item.value === next.value);
      if (!hasItem) {
        return [...last, next];
      }
      return last.map(item => {
        if (item.value !== next.value) {
          return item;
        }
        return {
          ...item,
          ...next,
        };
      });
    })
  };

  const initialValue = useMemo<TabsConfig>(() => ({
    register,
    currentValue: selfValue,
    inGroup: true,
    leftSpace,
  }), [selfValue, leftSpace]);

  useEffect(() => {
    if (typeof value === 'undefined') {
      return;
    }
    setSelfValue(value);
  }, [value]);

  const clickHandler = (value: string) => {
    setSelfValue(value);
    onChange && onChange(value);
  };

  const tabItemMouseOverHandler = (event: MouseEvent<HTMLDivElement>) => {
    if (!isGeistElement(event.target as HTMLDivElement)) {
      return;
    }
    setRect(event, () => ref.current);
    if (highlight) {
      setDisplayHighlight(true);
    }
  };

  return (
    <TabsContext.Provider value={initialValue}>
      <StyledTabs className={useClasses('tabs', className)} leftSpace={leftSpace} align={align} {...props}>
        <header ref={ref} onMouseLeave={() => setDisplayHighlight(false)}>
          <Highlight rect={rect} visible={displayHighlight} hoverHeightRatio={hoverHeightRatio} hoverWidthRatio={hoverWidthRatio} />
          <div className={useClasses('scroll-container', { 'hide-divider': hideDivider })}>
            {tabs.map(({ cell: Cell, value }) => (
              <Cell key={value} activeClassName={activeClassName} activeStyle={activeStyle} hideBorder={hideBorder}
                onClick={clickHandler} onMouseOver={tabItemMouseOverHandler}
              />
            ))}
          </div>
        </header>
        <div className="content">{children}</div>
      </StyledTabs>
    </TabsContext.Provider>
  );
}

Tabs.displayName = 'Tabs';

(Tabs as ITabs).Item = TabsItem;
(Tabs as ITabs).Tab = TabsItem;

export default Tabs as ITabs;

type ITabs = typeof Tabs & {
  Item: typeof TabsItem;
  Tab: typeof TabsItem;
};
