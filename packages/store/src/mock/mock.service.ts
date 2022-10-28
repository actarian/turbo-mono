import type { FindParams, IEntity } from '@websolute/core';
import { JsonService, localizeItem } from '@websolute/core';

export class MockService<T extends IEntity> extends JsonService<T> {

  protected override decorator_(item: any, params: FindParams = {}): any {
    if (params.locale) {
      return localizeItem(item, params.locale);
    } else {
      return item;
    }
  }

}
