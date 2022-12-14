import { consoleWarn, getClassNames, withSchema } from '@websolute/core';
import { useCurrentState } from '@websolute/hooks';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Expand } from '../../components';
import { useAccordionContext } from './accordion-context';
import { AccordionGroup } from './accordion-group';
import { AccordionIcon } from './accordion-icon';

type Props = {
  title: React.ReactNode | string
  subtitle?: React.ReactNode | string
  initialVisible?: boolean
  shadow?: boolean
  className?: string
  index?: number
};

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

const AccordionBase: React.FC<React.PropsWithChildren<AccordionProps>> = ({
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

  if (!title) {
    consoleWarn('"title" is required.', 'Accordion');
  }

  useEffect(() => {
    if (!values.length) {
      return;
    }
    const visible = !!values.find(item => item === index);
    setVisible(visible);
  }, [values.join(',')]);

  const onClick = () => {
    const visible = !visibleRef.current;
    setVisible(visible);
    updateValues && updateValues(index, visible);
  };

  const classNames = getClassNames('accordion', { shadow }, className);

  return (
    <StyledAccordion className={classNames} {...props}>
      <div className="view" role="button" onClick={onClick}>
        <div className="title">
          <span>{title}</span> <AccordionIcon active={visible} />
        </div>
        {subtitle && <div className="subtitle">{subtitle}</div>}
      </div>
      <Expand isExpanded={visible}>{children}</Expand>
    </StyledAccordion>
  );
};

export const Accordion = withSchema(AccordionBase, {
  Group: AccordionGroup,
  displayName: 'Accordion',
});
