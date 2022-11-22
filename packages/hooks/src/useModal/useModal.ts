import { UIValue, useUI } from '../useUI/useUI';

export function useModal(): [modal: UIValue, open: (value?: string) => void, close: () => void] {
  const modal = useUI(state => state.views.modal);
  const reduce = useUI(state => state.actions.reduce);
  function setModal(value?: string | number) {
    reduce('modal', (views) => value);
  }
  function openModal(value?: string | number) {
    return setModal(value);
  }
  function closeModal() {
    return setModal();
  }
  return [modal, openModal, closeModal];
}
