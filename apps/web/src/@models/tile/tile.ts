import type { IEquatable } from '@core';

export type ITile = {
  id: IEquatable;
  schema: string;
  category: any;
  title: string;
  abstract: string;
  image: string;
  href: string;
  finish: string;
  size: string;
  featureIds: any[];
};
