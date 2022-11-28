import { IEntity, JsonService, localizeItem, QueryParams } from '@websolute/core';

export class MockService<T extends IEntity> extends JsonService<T> {

  protected override decorator_(item: any, params: QueryParams = {}): any {
    if (params.locale) {
      return localizeItem(item, params.locale);
    } else {
      return item;
    }
  }

}
