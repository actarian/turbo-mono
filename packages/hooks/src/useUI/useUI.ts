import create from 'zustand';

export type UIValue = string | number | boolean | undefined;

type UIViews = {
  [key: string]: UIValue;
};

export type UIReducer = (state: UIViews) => UIValue;

type UIActions = {
  reduce(key: string, reducer: UIReducer): void;
};

type UIStore = {
  views: UIViews;
  actions: UIActions;
};

export const useUI = create<UIStore>((set, get) => ({
  views: {},
  actions: {
    reduce: (key: string, reducer: UIReducer) => {
      const views = { ...get().views };
      const newViews = { ...views };
      const value = reducer(views);
      newViews[key] = value;
      set({
        views: newViews,
      });
    },
  },
}));

/*
const PERSIST = false;

export const useUI =
  PERSIST ?
    create<IUIStore>()(persist(uiStore, { name: 'ui' })) :
    create<IUIStore>(uiStore as StateCreator<any>);
*/
