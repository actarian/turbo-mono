import React from 'react';

const defaultContext = {
  values: [],
};

export interface AccordionConfig {
  values: Array<number>;
  updateValues?: (currentIndex: number, nextState: boolean) => unknown;
}

export const AccordionContext = React.createContext<AccordionConfig>(defaultContext);

export const useAccordionContext = (): AccordionConfig => React.useContext<AccordionConfig>(AccordionContext);
