import { IEquatable } from '@websolute/core';
import { OrderDefaults } from '@websolute/mock';
import { getRoutesForTemplates } from '../route/route.service';
import { IOrderDetail } from './order';

export async function getOrders(market: string, locale: string): Promise<IOrderDetail[]> {
  const knownRoutes = await getRoutesForTemplates(['reserved_area_order_detail'], market, locale);
  return OrderDefaults.items.map(x => {
    const orderDetail: IOrderDetail = {
      ...x,
      href: `${knownRoutes.reserved_area_order_detail}?orderId=${x.id}`,
    };
    return orderDetail;
  });
}

export async function getOrder(id: IEquatable, market: string, locale: string): Promise<IOrderDetail | null> {
  const knownRoutes = await getRoutesForTemplates(['reserved_area_order_detail'], market, locale);
  const order = OrderDefaults.items.find(x => String(x.id) === String(id)) || null;
  if (order) {
    const orderDetail: IOrderDetail = {
      ...order,
      href: `${knownRoutes.reserved_area_order_detail}?orderId=${order.id}`,
    };
    return orderDetail;
  }
  return order;
}

