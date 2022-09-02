import create, { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

const PERSIST = false;

const uiStore: IStateCreator<IUIStore> = (set, get) => ({
  reduce: (reducer: IUIStateReducer) => {
    const newState = { ...get() };
    const state = reducer(newState);
    if (state) {
      set({ ...newState, ...state });
    }
  },
});

export const useUI =
  PERSIST ?
    create<IUIStore>()(persist(uiStore, { name: 'ui' })) :
    create<IUIStore>(uiStore as StateCreator<any>);

export type IUIStateSetter = (reducer: IUIStateReducer) => void;

export type IUIStateReducer = (state: IUIStore) => IUIStore | IUIState | void;

export type IUIStateValue = string | number | boolean | undefined | IUIState | IUIStateSetter;

export type IUIState = {
  [key: string]: IUIStateValue;
};

export type IUIStore = {
  [key: string]: IUIStateValue;
  reduce(reducer: IUIStateReducer): void;
};

export type IStateCreator<T extends object> = StateCreator<T, any, [], T>;
