import type { FindParams, IEntity } from '@core';
import JsonService from '@core/json/json.service';
import { localizeItem } from '@models/locale/locale.service';

export default class MockService<T extends IEntity> extends JsonService<T> {

  protected override decorator_(item: any, params: FindParams = {}): any {
    if (params.locale) {
      return localizeItem(item, params.locale);
    } else {
      return item;
    }
  }

}
