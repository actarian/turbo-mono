import { getStore } from '@core/store/store.service';
import { IKeyedList, IList } from './list';

export async function getLists(locale?: string): Promise<IList[]> {
  const store = await getStore();
  const items = await store.list.findMany({ locale });
  return items;
}

export async function getListByKeys(keys: string[], locale?: string): Promise<{ [key: string]: IList[] }> {
  const store = await getStore();
  const items = await store.list.findMany({ locale });
  const lists: { [key: string]: IList[] } = {};
  (items.filter((x: IList) => x.key && keys.includes(x.key)) as IKeyedList[]).forEach(x => {
    lists[x.key] = items.filter(i => i.listId === x.id);
  });
  return lists;
}
