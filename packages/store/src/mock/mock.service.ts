import { IEntity, JsonService, localizeItem, QueryParams } from '@websolute/core';

export class MockService<T extends IEntity = any> extends JsonService<T> {

  /*
  findOne(params: QueryParams): Promise<T | undefined> {
    const query = qsSerialize(params);
    console.log('MockService.findOne', query);
    const deserialized = qsDeserialize(query);
    console.log('MockService.findOne', deserialized);
    return super.findOne(params);
  }

  findMany(params: QueryParams = {}): Promise<T[]> {
    const query = qsSerialize(params);
    console.log('MockService.findMany', query);
    const deserialized = qsDeserialize(query);
    console.log('MockService.findMany', deserialized);
    return super.findMany(params);
  }
  */

  protected override decorator_(item: any, params: QueryParams = {}): any {
    if (params.locale) {
      return localizeItem(item, params.locale);
    } else {
      return item;
    }
  }

}
