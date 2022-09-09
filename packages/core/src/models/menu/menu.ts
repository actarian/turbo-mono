import type { IEntity, IEquatable } from '../../core/entity/entity';

export interface IMenu extends IEntity {
  id: IEquatable;
  items: IMenuItem[];
}

export interface IMenuItem {
  name: string;
  href: string;
}
