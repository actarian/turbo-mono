import type { IEntity, IEquatable, ILocalizedString } from '@core';

export interface ICategory extends IEntity {
  id: IEquatable;
  name: string;
  title?: ILocalizedString | string;
  slug?: ILocalizedString | string;
  pageSchema?: string;
  pageId?: IEquatable;
  categoryId?: IEquatable;
}

export interface ICategoryItem extends ICategory {
  items: ICategory[];
}

export interface ICategorized {
  id: IEquatable;
  schema: string;
  title?: ILocalizedString | string;
  slug?: ILocalizedString | string;
  categoryId?: IEquatable;
}
