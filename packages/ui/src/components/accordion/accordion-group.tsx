import { getClassNames } from '@websolute/core';
import { useCurrentState } from '@websolute/hooks';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { setChildrenIndex } from '../popover/popover-collections';
import { Accordion } from './accordion';
import { AccordionConfig, AccordionContext } from './accordion-context';

type Props = {
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

export const AccordionGroup: React.FC<React.PropsWithChildren<AccordionGroupProps>> = ({
  accordion = true,
  className = '',
  children,
  ...props
}: React.PropsWithChildren<AccordionGroupProps>) => {

  const [state, setState, stateRef] = useCurrentState<Array<number>>([]);

  const updateValues = (index: number, visible: boolean) => {
    const hasChild = stateRef.current.find(x => x === index);

    if (accordion) {
      if (visible) {
        return setState([index]);
      }
      return setState([]);
    }

    if (visible) {
      // In a few cases, the user will set Accordion Component state manually.
      // If the user incorrectly set the state, Group component should ignore it.
      /* istanbul ignore if */
      if (hasChild) {
        return;
      }
      return setState([...stateRef.current, index]);
    }
    setState(stateRef.current.filter(item => item !== index));
  }

  const initialValue = useMemo<AccordionConfig>(() => ({
    values: state,
    updateValues,
  }), [state.join(',')]);

  const indexedChildren = useMemo(() => setChildrenIndex(children, [Accordion]), [children]);

  const classNames = getClassNames('accordion-group', className);

  return (
    <AccordionContext.Provider value={initialValue}>
      <StyledAccordionGroup className={classNames} {...props}>
        {indexedChildren}
      </StyledAccordionGroup>
    </AccordionContext.Provider>
  )
}

AccordionGroup.displayName = 'AccordionGroup';
