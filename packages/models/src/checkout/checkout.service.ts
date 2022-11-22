import { IOption } from '@websolute/core';
import { ICartItem } from '../cart/cart';
import { getCountries } from '../country/country.service';
import { getProvinces } from '../province/province.service';
import { getRegions } from '../region/region.service';
import { getRoutesForSchemas } from '../route/route.service';
import { IAddressOptions, IUser } from '../user/user';
import { ICheckoutDelivery, ICheckoutItem, ICheckoutPartial, ICheckoutPayment, ICheckoutStore } from './checkout';

// step 1.
export async function getItems(items: ICartItem[], market: string, locale: string, user?: IUser): Promise<ICheckoutItem[]> {
  // !!! todo calculate user discount price
  return items.map(x => ({ ...x, fullPrice: x.price, price: x.price * 0.9 }));
}

// step 2.
export async function getInfo(checkout: ICheckoutPartial, market: string, locale: string): Promise<IAddressOptions> {
  const countries = await getCountries(locale) as IOption[];
  const provinces = await getProvinces(locale) as IOption[];
  const regions = await getRegions(locale) as IOption[];
  const data = { countries, regions, provinces };
  return data;
}

// step 3.
export async function getDeliveries(checkout: ICheckoutPartial, market: string, locale: string): Promise<ICheckoutDelivery[]> {
  return [
    {
      'id': 1,
      'name': 'In-store pick up',
      'abstract': 'Conveniently collect from your nearest shop at no extra charge',
      'price': 0,
      'fullPrice': 0
    },
    {
      'id': 2,
      'name': 'Courier delivery',
      'abstract': 'Packaged goods are delivered by our trusted forwarder.',
      'price': 81,
      'fullPrice': 81
    },
    {
      'id': 3,
      'name': 'In-home courier delivery',
      'abstract': 'Packaged goods are delivered inside at front door. <br>White glove delivery, unpacking, assembly, or removal of debris is optional on request.',
      'price': 156,
      'fullPrice': 156
    }
  ];
}

// step 4.
export async function getStores(checkout: ICheckoutPartial, market: string, locale: string): Promise<ICheckoutStore[]> {
  return [
    {
      'id': 10366,
      'category': { 'id': 'store_category_distributor', 'name': 'Hexagon Distributor' },
      'name': 'Di Paolo Arredamenti',
      'address': 'Viale Cesare Battisti',
      'streetNumber': '80',
      'zipCode': '64020',
      'city': 'Bellante',
      'country': { 'id': 'it', 'name': 'Italy' },
      'phoneNumber': '+39 0861 616436',
      'timetable': [],
      'position': {
        'latitude': 0.0,
        'longitude': 0.0
      },
      'distance': 151.84174300013095,
      'rank': 1
    }, {
      'id': 7430,
      'category': { 'id': 'store_category_distributor', 'name': 'Hexagon Distributor' },
      'name': 'Mancini Italian Design & Art S.r.l.',
      'address': 'Via Ascari',
      'streetNumber': '2',
      'zipCode': '41053',
      'city': 'Maranello',
      'country': { 'id': 'it', 'name': 'Italy' },
      'email': 'info@mancinimida.com',
      'timetable': [],
      'position': {
        'latitude': 0.0,
        'longitude': 0.0
      },
      'distance': 170.6551472799284,
      'rank': 2
    }, {
      'id': 325,
      'category': { 'id': 'store_category_distributor', 'name': 'Hexagon Distributor' },
      'name': 'AD dal Pozzo',
      'address': 'Via Mazzini',
      'streetNumber': '24',
      'zipCode': '36040',
      'city': 'Grisignano Di Zocco',
      'country': { 'id': 'it', 'name': 'Italy' },
      'phoneNumber': '+39 0444 614521',
      'email': 'mfort@websolute.it',
      'timetable': [],
      'position': {
        'latitude': 0.0,
        'longitude': 0.0
      },
      'distance': 196.0600048738732,
      'rank': 3
    }];
}

// step 5.
export async function getPayments(checkout: ICheckoutPartial, market: string, locale: string): Promise<ICheckoutPayment[]> {
  return [
    {
      'id': 'alipay',
      'name': 'Alipay',
      'media': {
        'type': 'image',
        'src': '/assets/payment/alipay.svg'
      }
    },
    {
      'id': 'amex',
      'name': 'American Express',
      'media': {
        'type': 'image',
        'src': '/assets/payment/american-express.svg'
      }
    },
    {
      'id': 'apple-pay',
      'name': 'Apple Pay',
      'media': {
        'type': 'image',
        'src': '/assets/payment/apple-pay.svg'
      }
    },
    {
      'id': 'bank-transfer',
      'name': 'Bank Transfer',
      'media': {
        'type': 'image',
        'src': '/assets/payment/bank-transfer.svg'
      }
    },
    {
      'id': 'cbc',
      'name': 'CBC',
      'media': {
        'type': 'image',
        'src': '/assets/payment/cbc.svg'
      }
    },
    {
      'id': 'direct-debit',
      'name': 'Direct Debit',
      'media': {
        'type': 'image',
        'src': '/assets/payment/direct-debit.svg'
      }
    },
    {
      'id': 'googlepay',
      'name': 'Google Pay',
      'media': {
        'type': 'image',
        'src': '/assets/payment/googlepay.svg'
      }
    },
    {
      'id': 'ideal',
      'name': 'iDEAL',
      'media': {
        'type': 'image',
        'src': '/assets/payment/ideal.svg'
      }
    },
    {
      'id': 'maestro',
      'name': 'Maestro',
      'media': {
        'type': 'image',
        'src': '/assets/payment/maestro.svg'
      }
    },
    {
      'id': 'mastercard',
      'name': 'MasterCard',
      'abstract': '<p>You can use your Mastercard credit card. The 3DS authentication procedure will be used when the order is concluded, and you will be redirected to the bank\'s web page. To complete the order, follow the required steps.</p>',
      'media': {
        'type': 'image',
        'src': '/assets/payment/mastercard.svg'
      }
    },
    {
      'id': 'mybank',
      'name': 'MyBank',
      'media': {
        'type': 'image',
        'src': '/assets/payment/mybank.svg'
      }
    },
    {
      'id': 'paypal',
      'name': 'PayPal',
      'media': {
        'type': 'image',
        'src': '/assets/payment/paypal.svg'
      }
    },
    {
      'id': 'trustly',
      'name': 'Trustly',
      'media': {
        'type': 'image',
        'src': '/assets/payment/trustly.svg'
      }
    },
    {
      'id': 'visa',
      'name': 'Visa',
      'abstract': '<p>You can use your Visa credit card. The 3DS authentication procedure will be used when the order is concluded, and you will be redirected to the bank\'s web page. To complete the order, follow the required steps.</p>',
      'media': {
        'type': 'image',
        'src': '/assets/payment/visa.svg'
      }
    },
    {
      'id': 'wechatpay',
      'name': 'WeChat Pay',
      'media': {
        'type': 'image',
        'src': '/assets/payment/wechatpay.svg'
      }
    },
    {
      'id': 'wire-transfer',
      'name': 'Wire Transfer',
      'abstract': '<p>The order confirmation will contain a summary of the total amount to be paid and the details of the bank to which the payment is to be made..</p><p> Once the payment has been made, the order will be activated and the delivery terms indicated for the various items ordered will apply. The successful completion of the payment will be communicated by email to the email address indicated during registration.</p>',
      'media': {
        'type': 'image',
        'src': '/assets/payment/wire-transfer.svg'
      }
    }
  ];
}

// update
export async function updateCheckout(checkout: ICheckoutPartial, action: string, market: string, locale: string): Promise<ICheckoutPartial> {
  // generic checkout update
  /*
  switch (action) {
    case 'basket':
      break;
    case 'info':
      break;
    case 'delivery':
      break;
    case 'store':
      break;
    case 'discount':
      break;
    case 'payment':
      break;
  }
  */
  // recalculate price
  const subTotal = checkout.items ? checkout.items.reduce((p, c) => {
    return p + c.price * c.qty;
  }, 0) : 0;
  const subTotalFull = checkout.items ? checkout.items.reduce((p, c) => {
    return p + c.fullPrice * c.qty;
  }, 0) : 0;
  const subTotalDiscountPrice = checkout.discounts ? checkout.discounts.reduce((p, c) => {
    let value = 0;
    switch (c.id) {
      case 'coupon10':
        value = subTotal * 0.1 * -1;
        c.price = value;
        break;
      case 'coupon50':
        value = subTotal * 0.5 * -1;
        c.price = value;
        break;
    }
    return p + value;
  }, 0) : 0;
  const deliveryPrice = checkout.delivery?.price || 0;
  const afterTaxesDiscountPrice = checkout.discounts ? checkout.discounts.reduce((p, c) => {
    let value = 0;
    switch (c.id) {
      case 'shipping':
        value = deliveryPrice * -1;
        c.price = value;
        break;
    }
    return p + value;
  }, 0) : 0;
  // const totalDiscountPrice = subTotalDiscountPrice + afterTaxesDiscountPrice;
  const taxes = (subTotal + subTotalDiscountPrice) * 0.2;
  const total = subTotal + subTotalDiscountPrice + taxes + deliveryPrice + afterTaxesDiscountPrice;
  checkout.subTotal = subTotal;
  checkout.subTotalFull = subTotalFull;
  checkout.taxes = taxes;
  checkout.total = total;
  return checkout;
}

// discounts
export async function setDiscountCode(discountCode: string, checkout: ICheckoutPartial, market: string, locale: string): Promise<ICheckoutPartial> {
  const discounts = []; // checkout.discounts || [];
  if (discountCode === 'shipping') {
    discounts.push({
      'id': 'shipping',
      'name': 'shipping',
      'abstract': 'Free shipping',
      'price': (checkout.delivery?.price || 0) * -1,
      'validFrom': new Date(),
      'validTo': new Date(),
    });
  }
  if (discountCode === 'coupon10') {
    discounts.push({
      'id': 'coupon10',
      'name': 'coupon10',
      'abstract': '10%',
      'price': (checkout.items?.reduce((p, c) => p + c.price * c.qty * 0.1, 0) || 0) * -1,
      'validFrom': new Date(),
      'validTo': new Date(),
    });
  }
  if (discountCode === 'coupon50') {
    discounts.push({
      'id': 'coupon50',
      'name': 'coupon50',
      'abstract': '50%',
      'price': (checkout.items?.reduce((p, c) => p + c.price * c.qty * 0.5, 0) || 0) * -1,
      'validFrom': new Date(),
      'validTo': new Date(),
    });
  }
  return await updateCheckout({ ...checkout, discounts }, 'discount', market, locale);
}

// payment
export async function getPayment(checkout: ICheckoutPartial, market: string, locale: string): Promise<{ redirectUrl: string }> {
  const knownRoutes = await getRoutesForSchemas(['checkout_result'], market, locale);
  // console.log('getPayment.knownRoutes', knownRoutes, checkout, market, locale);
  // !!! todo return payment redirectUrl
  const redirectUrl = `${knownRoutes.checkout_result}?orderId=1&status=OK`;
  return { redirectUrl };
}
