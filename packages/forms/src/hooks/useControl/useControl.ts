import { useCallback, useEffect, useState } from 'react';
import { FormAbstract, FormState, mapErrors_ } from '../../forms';

export function useControl<T>(
  control: FormAbstract
): [FormState<T>, (value: T | null) => void, () => void, () => void, FormAbstract] {

  const [state, setState] = useState<FormState<T>>({
    value: control.value as T,
    flags: control.state,
    errors: mapErrors_(control.errors)
  });

  const setValue = useCallback((value: T | null) => {
    control.patch(value);
  }, [control]);

  const setTouched = useCallback(() => {
    control.touched = true;
  }, [control]);

  const reset = useCallback(() => {
    control.reset();
  }, [control]);

  useEffect(() => {
    const onChange = (value: T) => {
      const newState = { value, flags: control.state, errors: mapErrors_(control.errors) };
      // console.log('useControl.onChange', newState);
      setState(newState);
    };
    control.on('change', onChange);
    // control.validateAndChange_();
    return () => control.off('change', onChange);
  }, [control]);

  return [state, setValue, setTouched, reset, control];
}
