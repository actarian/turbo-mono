import type { IEntity, IEquatable, ILocalizedString } from '@websolute/core';
import { IMedia } from '../media/media';

export interface ICategory extends IEntity {
  id: IEquatable;
  name: string;
  slug?: ILocalizedString | string;
  title?: ILocalizedString | string;
  media?: IMedia;
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
  slug?: ILocalizedString | string;
  title?: ILocalizedString | string;
  categoryId?: IEquatable;
  media?: IMedia;
}
