import { consoleWarn, useClasses, useCurrentState } from '@websolute/hooks';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Expand } from '../../components';
import { useAccordionContext } from './accordion-context';
import AccordionIcon from './accordion-icon';

interface Props {
  title: string
  subtitle?: React.ReactNode | string
  initialVisible?: boolean
  shadow?: boolean
  className?: string
  index?: number
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type AccordionProps = Props & NativeAttrs;

const StyledAccordion = styled.div`
  width: auto;
  height: auto;
  margin: 0;
  padding: 1.2rem 0;
  border-top: 1px solid var(--color-neutral-200);
  border-bottom: 1px solid var(--color-neutral-200);

  .shadow {
    box-shadow: var(--shadow-sm);
    border: none;
    border-radius: var(--border-radius);
    padding: var(--grid-column-gap);
  }

  .view {
    outline: none;
    cursor: pointer;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-neutral-900);
    user-select: none;
    /*
    & > span {
      margin: 0;
      font-size: 1.5em;
    }
    */
  }

  .subtitle {
    color: var(--color-primary-500);
    margin: 0;

    & > :global(*) {
      margin: 0;
    }
  }

  .content {
    font-size: inherit;
    line-height: 1.6em;
    padding: 1.2rem 0;

    & > :global(*:first-child) {
      margin-top: 0;
    }

    & > :global(*:last-child) {
      margin-bottom: 0;
    }
  }
`;

const Accordion: React.FC<React.PropsWithChildren<AccordionProps>> = ({
  className = '',
  shadow = false,
  initialVisible = false,
  index = -1,
  children,
  title,
  subtitle,
  ...props
}: React.PropsWithChildren<AccordionProps>) => {

  const { values, updateValues } = useAccordionContext();

  const [visible, setVisible, visibleRef] = useCurrentState<boolean>(initialVisible);

  const classes = useClasses('accordion', { shadow }, className);

  if (!title) {
    consoleWarn('"title" is required.', 'Accordion');
  }

  useEffect(() => {
    if (!values.length) {
      return;
    }
    const isActive = !!values.find(item => item === index);
    setVisible(isActive);
  }, [values.join(',')]);

  const clickHandler = () => {
    const next = !visibleRef.current;
    setVisible(next);
    updateValues && updateValues(index, next);
  };

  return (
    <StyledAccordion className={classes} {...props}>
      <div className="view" role="button" onClick={clickHandler}>
        <div className="title">
          <span>{title}</span> <AccordionIcon active={visible} />
        </div>
        {subtitle && <div className="subtitle">{subtitle}</div>}
      </div>
      <Expand isExpanded={visible}>
        <div className="content">{children}</div>
      </Expand>
    </StyledAccordion>
  )
}

Accordion.displayName = 'Accordion';

(Accordion as IAccordion).Group = AccordionGroup;

export default Accordion as IAccordion;

type IAccordion = typeof Accordion & {
  Group: typeof AccordionGroup;
};

import AccordionGroup from './accordion-group';

