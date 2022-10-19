import { IEquatable, INamedEntity } from '@websolute/core';
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

export function valueToString(value: IEquatable | IEquatable[] | null): string | string[] | undefined {
  function mapValue(value: IEquatable | null): string | undefined {
    return value != null ? value.toString() : undefined;
  }
  function mapValues(values: IEquatable[]): string[] | undefined {
    const strings = values.map(x => mapValue(x)).filter(x => x !== undefined) as string[];
    return strings.length ? strings : undefined;
  }
  return Array.isArray(value) ? mapValues(value) : mapValue(value);
}

export function stringToValue(value: string | string[] | undefined, options?: INamedEntity[]): IEquatable | IEquatable[] | null {
  function findValue(value: string): IEquatable | null {
    const option = options?.find(x => x.id.toString() === value);
    return option ? option.id : null;
  }
  function mapValue(value: string | undefined): IEquatable | null {
    return value !== undefined ? findValue(value) : null;
  }
  function mapValues(values: string[]): IEquatable[] | null {
    const ids = values.map(x => mapValue(x)).filter(x => x !== null) as IEquatable[];
    return ids.length ? ids : null;
  }
  return Array.isArray(value) ? mapValues(value) : mapValue(value);
}
