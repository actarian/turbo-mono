import { createContext, MutableRefObject, useContext } from 'react';

const defaultContext = {
  visible: false,
  value: '',
};

export interface IAutocompleteItem {
  id: any,
  name: string;
}

export interface IAutocomplete {
  visible?: boolean;
  value: any;
  ref?: MutableRefObject<HTMLElement | null>;
  updateValue?: (next: IAutocompleteItem) => unknown;
  updateVisible?: (next: boolean) => unknown;
}

export const AutocompleteContext = createContext<IAutocomplete>(defaultContext);

export function useAutocompleteContext(): IAutocomplete {
  return useContext<IAutocomplete>(AutocompleteContext);
}
