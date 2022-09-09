import { IEntity } from '../../core/entity/entity';

export interface ILocale extends IEntity {
  id: string;
  // schema?: string;
  title?: string;
  isDefault?: boolean;
}
