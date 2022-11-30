import { IEntity, IEquatable } from '@websolute/core';

export type IMagazineDetail = IEntity & {
  slug: string;
  title?: string;
  abstract?: string;
  description?: string;
  category: IEquatable;
  href?: string;
};
