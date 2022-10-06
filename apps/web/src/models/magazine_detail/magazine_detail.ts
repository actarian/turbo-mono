import type { IEntity, IEquatable } from '@websolute/core';

export interface IMagazineDetail extends IEntity {
  slug: string;
  title?: string;
  abstract?: string;
  description?: string;
  categoryId: IEquatable;
  href?: string;
}
