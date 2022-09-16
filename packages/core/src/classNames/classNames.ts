export type IClassNameValue = string | boolean | number | null | undefined;

export type IClassNameCollection = Record<string, IClassNameValue>;

export type IClassName = IClassNameCollection | IClassNameValue;

const isClassNameCollection = (value: IClassName): value is IClassNameCollection =>
  typeof value === 'object' && !Array.isArray(value);

const classNameCollectionToString = (className: IClassNameCollection) => {
  const keys = Object.keys(className);
  const total = keys.length;
  let classNames = '';
  for (let i = 0; i < total; i++) {
    const key = keys[i];
    const value = className[keys[i]];
    if (!value) {
      continue;
    }
    classNames = classNames ? `${classNames} ${String(key)}` : String(key);
  }
  return classNames;
}

export function getClassNames(...props: Array<IClassName>): string {
  const total = props.length;
  let classNames = '';
  if (total === 0) {
    return classNames;
  }
  for (let i = 0; i < total; i++) {
    const value = props[i];
    if (!value) {
      continue;
    }
    if (isClassNameCollection(value)) {
      classNames += ` ${classNameCollectionToString(value)}`;
    } else {
      classNames += ` ${String(value).trim()}`;
    }
  }
  return classNames.trim();
}
