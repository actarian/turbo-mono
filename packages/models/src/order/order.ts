import { IEquatable, ValueOf } from '@websolute/core';
import { ICheckout } from '../checkout/checkout';

export const IOrderStatus = {
  Pending: 'pending', // Customer started the checkout process but did not complete it. Incomplete orders are assigned a "Pending" status and can be found under the More tab in the View Orders screen.
  AwaitingPayment: 'awaitingPayment', // Customer has completed the checkout process, but payment has yet to be confirmed. Authorize only transactions that are not yet captured have this status.
  AwaitingFulfillment: 'awaitingFulfillment', // Customer has completed the checkout process and payment has been confirmed.
  AwaitingShipment: 'awaitingShipment', // Order has been pulled and packaged and is awaiting collection from a shipping provider.
  AwaitingPickup: 'awaitingPickup', // Order has been packaged and is awaiting customer pickup from a seller-specified location.
  PartiallyShipped: 'partiallyShipped', // Only some items in the order have been shipped.
  Completed: 'completed', // Order has been shipped/picked up, and receipt is confirmed; client has paid for their digital product, and their file(s) are available for download.
  Shipped: 'shipped', // Order has been shipped, but receipt has not been confirmed; seller has used the Ship Items action. A listing of all orders with a "Shipped" status can be found under the More tab of the View Orders screen.
  Cancelled: 'cancelled', // Seller has cancelled an order, due to a stock inconsistency or other reasons. Stock levels will automatically update depending on your Inventory Settings. Cancelling an order will not refund the order. This status is triggered automatically when an order using an authorize-only payment gateway is voided in the control panel before capturing payment.
  Declined: 'declined', // Seller has marked the order as declined.
  Refunded: 'refunded', // Seller has used the Refund action to refund the whole order. A listing of all orders with a "Refunded" status can be found under the More tab of the View Orders screen.
  Disputed: 'disputed', // Customer has initiated a dispute resolution process for the PayPal transaction that paid for the order or the seller has marked the order as a fraudulent order.
  ManualVerificationRequired: 'manualVerificationRequired', // Order on hold while some aspect, such as tax-exempt documentation, is manually confirmed. Orders with this status must be updated manually. Capturing funds or other order actions will not automatically update the status of an order marked Manual Verification Required.
  PartiallyRefunded: 'partiallyRefunded', // Seller has partially refunded the order.
};

export type IOrderStatusValue = ValueOf<typeof IOrderStatus>;

export type IOrder = ICheckout & {
  id: IEquatable;
  date: Date | string;
  status: IOrderStatusValue;
}
