import { localizeItem } from '../../models/locale/locale.service';
import type { FindParams, IEntity } from '../entity/entity';
import JsonService from '../json/json.service';

export default class MockService<T extends IEntity> extends JsonService<T> {

  protected override decorator_(item: any, params: FindParams = {}): any {
    if (params.locale) {
      return localizeItem(item, params.locale);
    } else {
      return item;
    }
  }

}
