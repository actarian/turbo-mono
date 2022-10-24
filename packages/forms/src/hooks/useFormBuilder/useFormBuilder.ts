import { DependencyList, useCallback, useEffect, useMemo, useState } from 'react';
import { FormArray, FormControl, FormGroup, FormState, mapErrors_ } from '../../forms';
import { IFormBuilderArraySchema, IFormBuilderControlSchema, IFormBuilderGroupSchema, IFormBuilderGroupValues, IFormBuilderSchema } from '../../forms/types';

export function useFormBuilder<T, U extends (FormGroup | FormArray)>(
  schema: IFormBuilderSchema,
  deps: DependencyList = []
): [FormState<T>, (value: Partial<T>) => void, () => void, () => void, U] {

  const collection: U = useMemo<U>(() => {
    // console.log('useFormBuilder.rebuild', schema);
    if (Array.isArray(schema)) {
      return mapArray_(schema) as U;
    } else {
      return mapGroup_(schema) as U;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const setValue = useCallback((value: Partial<T>) => {
    collection.patch(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const setTouched = useCallback(() => {
    collection.touched = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const reset = useCallback(() => {
    collection.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const [state, setState] = useState<FormState<T>>({ value: collection.value as T, flags: collection.state, errors: mapErrors_(collection.errors) })

  useEffect(() => {
    const onChange = (value: T) => {
      const newState = { value, flags: collection.state, errors: mapErrors_(collection.errors) };
      // console.log('useFormBuilder.onChange', newState);
      setState(newState);
    };
    collection.on('change', onChange);
    collection.validateAndChange_();
    // console.log('subscribe');
    return () => collection.off('change', onChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [state, setValue, setTouched, reset, collection];
}

function mapGroup_(children: IFormBuilderGroupSchema, schema?: IFormBuilderControlSchema): FormGroup {
  const controls: IFormBuilderGroupValues = {};
  Object.keys(children).forEach(key => {
    controls[key] = mapSchema_({ name: key, ...children[key] });
  });
  const group = new FormGroup(controls, schema?.validators, schema);
  return group;
}

function mapArray_(children: IFormBuilderControlSchema[], schema?: IFormBuilderControlSchema): FormArray {
  const controls = children.map(x => mapSchema_(x));
  const array = new FormArray(controls, schema?.validators, schema);
  return array;
}

function mapControl_(schema: IFormBuilderControlSchema): FormControl {
  return new FormControl(schema.value, schema.validators, schema);
}

function mapSchema_(schema: IFormBuilderControlSchema): FormGroup | FormArray | FormControl {
  switch (schema.schema) {
    case 'group':
      return mapGroup_(schema.children as IFormBuilderGroupSchema || {}, schema);
    case 'array':
      return mapArray_(schema.children as IFormBuilderArraySchema || [], schema);
    default:
      return mapControl_(schema);
  }
}
