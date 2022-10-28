import type { IEntity, IEquatable, ILocalizedString } from '@websolute/core';
import { IMedia } from '../media/media';

export type ICategory = IEntity & {
  id: IEquatable;
  slug?: ILocalizedString | string;
  title?: ILocalizedString | string;
  media?: IMedia;
  pageSchema?: string;
  pageId?: IEquatable;
  categoryId?: IEquatable;
}

export type ICategoryItem = ICategory & {
  items: ICategory[];
}

export type ICategorized = {
  id: IEquatable;
  schema: string;
  slug?: ILocalizedString | string;
  title?: ILocalizedString | string;
  media?: IMedia;
  categoryId?: IEquatable;
}
