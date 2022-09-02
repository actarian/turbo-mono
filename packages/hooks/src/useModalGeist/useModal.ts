import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { ModalProps } from '../../components/modal/modal';
import { useCurrentState } from '../useCurrentState/useCurrentState';

export type ModalHooksBindings = Pick<ModalProps, 'visible' | 'onClose'>;

export function useModal(initialVisible: boolean = false): {
  visible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>,
  currentRef: MutableRefObject<boolean>,
  bindings: ModalHooksBindings
} {
  const [visible, setVisible, currentRef] = useCurrentState<boolean>(initialVisible);
  return {
    visible,
    setVisible,
    currentRef,
    bindings: {
      visible,
      onClose: () => setVisible(false),
    }
  };
}
