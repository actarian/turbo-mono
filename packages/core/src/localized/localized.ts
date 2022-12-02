import { ILocalizedString } from '../entity/entity';

export function isLocalizedString(value: any): value is ILocalizedString {
  let isLocalizedString = false;
  if (value && !Array.isArray(value) && typeof value === 'object') {
    const matchKeys = Object.keys(value).reduce((p, c) => p && /^(\w{2})(-\w{2})?$/.test(c), true);
    const matchValues = Object.values(value).reduce((p, c) => p && (typeof c === 'string' || !c), true);
    // console.log(matchKeys, matchValues);
    isLocalizedString = Boolean(matchKeys && matchValues);
  }
  return isLocalizedString;
}

export function localizedToString(json: ILocalizedString, locale: string = 'en', defaultLocale: string = 'en'): string {
  const localizedString = json[locale] || json[defaultLocale] || Object.values(json)[0];
  return localizedString;
}

export function localizeValue(value: any, locale: string = 'en', defaultLocale: string = 'en'): any {
  if (value) {
    if (isLocalizedString(value)) {
      return localizedToString(value, locale, defaultLocale);
    } else {
      return localizeItem(value, locale, defaultLocale);
    }
  }
}

export function localizeItem(item: any, locale: string = 'en', defaultLocale: string = 'en'): any {
  if (Array.isArray(item)) {
    item = item.map(x => localizeValue(x, locale, defaultLocale));
  } else if (typeof item === 'object') {
    item = { ...item };
    Object.keys(item).forEach(key => {
      item[key] = localizeValue(item[key], locale, defaultLocale);
    });
  }
  return item;
}
