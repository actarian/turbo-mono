import { UIValue, useUI } from '../useUI/useUI';

export function useDrawer(): [drawer: UIValue, open: (value?: string) => void, close: () => void] {
  const drawer = useUI(state => state.views.drawer);
  const reduce = useUI(state => state.actions.reduce);
  function setDrawer(value?: string | number) {
    reduce('drawer', (views) => value);
  }
  function openDrawer(value?: string | number) {
    return setDrawer(value);
  }
  function closeDrawer() {
    return setDrawer();
  }
  return [drawer, openDrawer, closeDrawer];
}
