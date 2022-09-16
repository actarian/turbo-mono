import { getClassNames } from '@websolute/core';
import { useCurrentState } from '@websolute/hooks';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { setChildrenIndex } from '../popover/popover-collections';
import Accordion from './accordion';
import { AccordionConfig, AccordionContext } from './accordion-context';

interface Props {
  accordion?: boolean;
  className?: string;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type AccordionGroupProps = Props & NativeAttrs;

const StyledAccordionGroup = styled.div`
  /*
  width: auto;
  height: auto;
  padding: 0 0.6rem;
  margin: 0;
  */

  /*
  & > :global(div + div) {
    border-top: none;
  }
  */
`;

const AccordionGroup: React.FC<React.PropsWithChildren<AccordionGroupProps>> = ({
  accordion = true,
  className = '',
  children,
  ...props
}: React.PropsWithChildren<AccordionGroupProps>) => {

  const [state, setState, stateRef] = useCurrentState<Array<number>>([]);

  const updateValues = (currentIndex: number, nextState: boolean) => {
    const hasChild = stateRef.current.find(val => val === currentIndex);

    if (accordion) {
      if (nextState) {
        return setState([currentIndex]);
      }
      return setState([]);
    }

    if (nextState) {
      // In a few cases, the user will set Accordion Component state manually.
      // If the user incorrectly set the state, Group component should ignore it.
      /* istanbul ignore if */
      if (hasChild) {
        return;
      }
      return setState([...stateRef.current, currentIndex]);
    }
    setState(stateRef.current.filter(item => item !== currentIndex));
  }

  const initialValue = useMemo<AccordionConfig>(() => ({
    values: state,
    updateValues,
  }), [state.join(',')]);

  const hasIndexChildren = useMemo(() => setChildrenIndex(children, [Accordion]), [children]);

  const classNames = getClassNames('accordion-group', className);

  return (
    <AccordionContext.Provider value={initialValue}>
      <StyledAccordionGroup className={classNames} {...props}>
        {hasIndexChildren}
      </StyledAccordionGroup>
    </AccordionContext.Provider>
  )
}

AccordionGroup.displayName = 'AccordionGroup';

export default AccordionGroup
