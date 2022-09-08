export function getIsDevelopment(): boolean {
  return process && process.env.NODE_ENV === 'development';
}

export const isDevelopment = getIsDevelopment();

export const isBrowser = typeof window !== 'undefined';

export function asStaticProps(props: any): any {
  return JSON.parse(JSON.stringify(props));
}

export async function awaitAll(array: any, callback: (item: any, index: number) => Promise<any>): Promise<any[]> {
  const promises = array.map(callback);
  return await Promise.all(promises);
}

export function merge(target: any, source: any): any {
  // override null values
  if (source === null) {
    return source;
  }
  // assign new values
  if (!target) {
    if (source && typeof source === 'object') {
      return Object.assign({}, source);
    } else {
      return source;
    }
  }
  // merge objects
  if (source && typeof source === 'object') {
    Object.keys(source).forEach(key => {
      const value = source[key];
      if (typeof value === 'object' && !Array.isArray(value)) {
        target[key] = merge(target[key], value);
      } else {
        target[key] = value;
      }
    });
  }
  return target;
}

export type StateValue = StateValue[] | { [key: string]: StateValue } | number | string | boolean | null | undefined;

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
