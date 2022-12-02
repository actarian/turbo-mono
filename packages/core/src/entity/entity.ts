
export type IEquatable = number | string;

export type ILocalizedString = { [key: string]: string };

export type IOption = {
  id: IEquatable;
  name: string;
  [key: string]: any;
};

export type ISchema = {
  id: IEquatable;
  schema: string;
};

export type IEntity = ISchema & {
  [key: string]: unknown;
};

export type INamedEntity = IEntity & {
  name: string | ILocalizedString;
};

export type ITitledEntity = IEntity & {
  title: string | ILocalizedString;
};

export type IQuerable<T extends IEntity> = {
  findOne(params?: QueryParams): Promise<T | undefined>;
  findMany(params?: QueryParams): Promise<T[]>;
  create(payload: T): Promise<T>;
  update(payload: T): Promise<T>;
  delete(id: IEquatable): Promise<T | undefined>;
};

export type FindParams = {
  where?: { [key: string]: unknown },
  market?: string,
  locale?: string,
};

export type FindWhereParams = {
  where: { [key: string]: unknown },
  market?: string,
  locale?: string,
};

export function toFindParams(idOrParams: IEquatable | FindWhereParams): FindWhereParams {
  if (typeof idOrParams === 'number' || typeof idOrParams === 'string') {
    return { where: { id: idOrParams } };
  } else {
    return idOrParams;
  }
}

export type Operator =
  | 'equals'
  | 'contains'
  | 'not_equals'
  | 'in'
  | 'not_in'
  | 'exists'
  | 'greater_than'
  | 'greater_than_equal'
  | 'less_than'
  | 'less_than_equal'
  | 'like'
  | 'near';

export type WhereField = {
  [key in Operator]?: unknown
};

export type WhereBase = {
  [key: string]: WhereField | Where[];
};

export type WhereAndOr = {
  or?: Where[];
  and?: Where[];
};

export type Where = WhereBase & WhereAndOr;

export type QueryParams = {
  where?: Where;
  locale?: string;
  market?: string;
  sort?: string;
  page?: number;
  limit?: number;
  depth?: number;
  draft?: boolean;
  pagination?: boolean;
  richText?: boolean;
  // 'fallback-locale'?: string;
};
