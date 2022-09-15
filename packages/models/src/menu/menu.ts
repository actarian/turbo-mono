import type { IEntity, IEquatable } from '@websolute/core';

export interface IMenu extends IEntity {
  id: IEquatable;
  items: IMenuItem[];
}

export interface IMenuItem {
  name: string;
  href: string;
}
