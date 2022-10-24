import { IEquatable } from '@websolute/core';

export type IFeatureType = {
  id: string;
  schema: string;
  title: string;
  mode: string;
  features?: {
    id: IEquatable;
    title: string;
    [key: string]: unknown;
  }[];
};
