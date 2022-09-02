import { IUIStateValue, useUI } from '../useUI/useUI';

export function useDrawer(): [drawer: IUIStateValue, open: (value?: string) => void, close: () => void] {
  const [drawer, reduceUI] = useUI(state => [state.drawer, state.reduce]);
  function onSetDrawer(value?: string | number) {
    reduceUI((state) => ({ drawer: value }));
  }
  function onOpenDrawer(value?: string | number) {
    return onSetDrawer(value);
  }
  function onCloseDrawer() {
    return onSetDrawer();
  }
  return [drawer, onOpenDrawer, onCloseDrawer];
}
