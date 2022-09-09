import { IEntity } from '../../core/entity/entity';

export interface IMarket extends IEntity {
  id: string;
  // schema?: string;
  title?: string;
  isDefault?: boolean;
  countries?: string[];
  languages?: string[];
}
