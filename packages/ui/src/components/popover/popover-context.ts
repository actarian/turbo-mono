import React, { useContext } from 'react';

export type PopoverConfig = {
  disableItemsAutoClose: boolean;
  onItemClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const defaultContext = {
  disableItemsAutoClose: false,
  onItemClick: () => { },
};

export const PopoverContext = React.createContext<PopoverConfig>(defaultContext);

export function usePopoverContext(): PopoverConfig {
  return useContext<PopoverConfig>(PopoverContext);
}
