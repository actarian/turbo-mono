import { IEntity, IEquatable } from '@websolute/core';

export type IMenu = IEntity & {
  id: IEquatable;
  items: IMenuItem[];
};

export type IMenuItem = {
  name: string;
  href: string;
};
