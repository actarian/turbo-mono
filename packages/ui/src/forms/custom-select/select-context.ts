import React, { MutableRefObject } from 'react';

const defaultContext = {
  disableAll: false,
  visible: false,
  value: '',
};

export interface SelectConfig {
  disableAll?: boolean;
  visible?: boolean;
  value: string | string[];
  ref?: MutableRefObject<HTMLElement | null>;
  updateValue?: (next: string) => unknown;
  updateVisible?: (next: boolean) => unknown;
}

export const SelectContext = React.createContext<SelectConfig>(defaultContext);

export function useSelectContext(): SelectConfig {
  return React.useContext<SelectConfig>(SelectContext);
}
