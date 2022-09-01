import { createContext, useContext } from 'react';

export interface ModalConfig {
  close?: () => void;
}

export const ModalContext = createContext<ModalConfig>({});

export function useModalContext(): ModalConfig {
  return useContext<ModalConfig>(ModalContext);
}
