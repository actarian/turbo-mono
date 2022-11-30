import { IEntity, IEquatable, ILocalizedString } from '@websolute/core';
import { IMedia } from '../media/media';

export type ICategory = IEntity & {
  id: IEquatable;
  slug?: ILocalizedString | string;
  title?: ILocalizedString | string;
  media?: IMedia;
  schema?: string;
  page?: IEquatable;
  category?: IEquatable;
};

export type ICategoryItem = ICategory & {
  items: ICategory[];
};

export type ICategorized = {
  id: IEquatable;
  schema: string;
  category?: IEquatable;
  isDefault?: boolean;
  slug?: ILocalizedString | string;
  title?: ILocalizedString | string;
  media?: IMedia;
};
