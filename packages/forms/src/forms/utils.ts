import { FormErrors, FormValidationError, StateValue } from './types';

export function validValue(value: any) {
  return value !== undefined && value !== '' ? value : null;
}

export function isThenable(result: any) {
  return result && typeof result.then === 'function';
}

export function mapErrors_(errors: FormErrors): FormValidationError[] {
  return Object.keys(errors).map(key => ({ key, value: errors[key] }));
}

export function deepCopy<T>(source: T): T;
// export function deepCopy(source: any): any {
export function deepCopy(source: StateValue): StateValue {
  if (Array.isArray(source)) {
    return source.map(x => deepCopy(x));
  } else if (source && typeof source === 'object') {
    const copy: { [key: string]: any } = {};
    Object.keys(source).forEach(key => {
      copy[key] = deepCopy(source[key]);
    });
    return copy;
  } else {
    return source;
  }
}

export function className(...args: ({ [key: string]: boolean } | string)[]): string {
  return args.map(x => (
    typeof x === 'object' ?
      Object.keys(x).filter(key => x[key]).join(' ') :
      x.toString()
  )).join(' ');
}
