import React, { MutableRefObject } from 'react';

const defaultContext = {
  disableAll: false,
  visible: false,
  value: '',
};

export type CustomSelectConfig = {
  disableAll?: boolean;
  visible?: boolean;
  value: string | string[];
  ref?: MutableRefObject<HTMLElement | null>;
  updateValue?: (next: string) => unknown;
  updateVisible?: (next: boolean) => unknown;
}

export const CustomSelectContext = React.createContext<CustomSelectConfig>(defaultContext);

export function useCustomSelectContext(): CustomSelectConfig {
  return React.useContext<CustomSelectConfig>(CustomSelectContext);
}
