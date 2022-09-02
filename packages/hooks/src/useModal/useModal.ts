import { IUIStateValue, useUI } from '../useUI/useUI';

export function useModal(): [modal: IUIStateValue, open: (value?: string) => void, close: () => void] {
  const [modal, reduceUI] = useUI(state => [state.modal, state.reduce]);
  function onSetModal(value?: string | number) {
    reduceUI((state) => ({ modal: value }));
  }
  function onOpenModal(value?: string | number) {
    return onSetModal(value);
  }
  function onCloseModal() {
    return onSetModal();
  }
  return [modal, onOpenModal, onCloseModal];
}
