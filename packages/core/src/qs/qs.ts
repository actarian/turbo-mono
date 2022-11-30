import { QueryParams } from '@websolute/core';

// serialize

function serializeKey(key: string | number, parentKey: string = ''): string {
  return parentKey ? `${parentKey}[${key}]` : String(key);
}

function serializeParam(key: string | number, value: {} | unknown, serializedParams: { key: string, value: unknown }[] = [], parentKey: string = ''): { key: string, value: unknown }[] {
  if (value != null) {
    if (typeof value === 'object') {
      serializedParams = serializeParams(value, serializedParams, serializeKey(key, parentKey));
    } else {
      serializedParams.push({
        key: serializeKey(key, parentKey),
        value: value,
      });
    }
  }
  return serializedParams;
}

function serializeParams(params: {}, serializedParams: { key: string, value: unknown }[] = [], parentKey: string = ''): { key: string, value: unknown }[] {
  if (Array.isArray(params)) {
    params.forEach((value, key) => {
      serializedParams = serializeParam(key, value, serializedParams, parentKey);
    });
  } else {
    Object.entries(params).forEach(([key, value]) => {
      serializedParams = serializeParam(key, value, serializedParams, parentKey);
    });
  }
  return serializedParams;
}

export function qsSerialize(queryParams: QueryParams = {}): string {
  const params = serializeParams(queryParams);
  if (params.length) {
    // console.log(params.map(x => `${x.key}=${x.value}`).join('&'));
    return params.map(x => `${x.key}=${x.value}`).join('&');
  }
  return '';
}

// deserialize


export function deserializeValue(value: string): string | number {
  return String(parseInt(value)) === value ? Number(value) : value;
}

function deserializeKey(key: string): (string | number)[] {
  const keys = key.replace(/[\]]/g, '').split('[').map(x => deserializeValue(x));
  return keys;
}

function getNextKeyItem(key: string | number | undefined): { [key: string]: unknown } | unknown[] {
  if (typeof key === 'number') {
    return [];
  } else {
    return {};
  }
}

function deserializeParam(key: string, value: string, deserializedParams: {} = {}): {} {
  const keys = deserializeKey(key);
  let target: { [key: string]: unknown } | unknown[] = deserializedParams;
  while (keys.length) {
    const key = keys.shift() as string | number;
    if (keys.length === 0) {
      (target as any)[key] = deserializeValue(value);
    } else {
      const next: { [key: string]: unknown } | unknown[] = (target as any)[key] ? (target as any)[key] : (target as any)[key] = getNextKeyItem(keys[0]);
      target = next;
    }
  }
  return deserializedParams;
}

function deserializeParams(params: string[][], deserializedParams: {} = {}): {} {
  params.forEach((x) => deserializeParam(x[0], x[1], deserializedParams));
  return deserializedParams;
}

export function qsDeserialize(query: string = '', deserializedParams: {} = {}): QueryParams {
  if (query.indexOf('?') === 0) {
    query = query.substring(1);
  }
  if (query !== '') {
    const params = query.split('&').map(x => x.split('='));
    if (params.length) {
      return deserializeParams(params, deserializedParams);
    }
  }
  return deserializedParams;
}
