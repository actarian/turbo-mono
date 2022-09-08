import type { FindParams, IEntity } from '@core';
import JsonService from '@core/json/json.service';
export default class MockService<T extends IEntity> extends JsonService<T> {
    protected decorator_(item: any, params?: FindParams): any;
}
//# sourceMappingURL=mock.service.d.ts.map