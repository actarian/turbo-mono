import { DependencyList, useCallback, useEffect, useMemo, useState } from 'react';
import { FormArray, FormGroup, FormState, mapErrors_ } from '../../forms';

export function useForm<T, U extends (FormGroup | FormArray)>(factory: () => U, deps: DependencyList = []): [FormState<T>, (value: any) => void, () => void, () => void, U] {
  const collection: U = useMemo<U>(factory, deps);

  const setValue = useCallback((value: any) => {
    collection.patch(value);
  }, deps);

  const setTouched = useCallback(() => {
    collection.touched = true;
  }, deps);

  const reset = useCallback(() => {
    collection.reset();
  }, deps);

  const [state, setState] = useState<FormState<T>>({ value: collection.value as T, flags: collection.state, errors: mapErrors_(collection.errors) });

  useEffect(() => {
    const onChange = (value: T) => {
      const newState = { value, flags: collection.state, errors: mapErrors_(collection.errors) };
      // console.log('useForm.onChange', newState);
      setState(newState);
    };
    collection.on('change', onChange);
    collection.validateAndChange_();
    return () => collection.off('change', onChange);
  }, deps);

  return [state, setValue, setTouched, reset, collection];
}
