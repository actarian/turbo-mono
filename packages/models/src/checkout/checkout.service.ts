import { getCountries } from '../country/country.service';
import { getProvinces } from '../province/province.service';
import { getRegions } from '../region/region.service';
import { getRoutesForSchemas } from '../route/route.service';

// step 2.
export async function getInfo(checkout: any, market: string, locale: string): Promise<any> {
  const countries = await getCountries(locale);
  const provinces = await getProvinces(locale);
  const regions = await getRegions(locale);
  const data = { countries, regions, provinces };
  return data;
}

// step 3.
export async function getDeliveries(checkout: any, market: string, locale: string): Promise<any> {
  return [
    {
      "id": 1,
      "name": "In-store pick up",
      "abstract": "Conveniently collect from your nearest shop at no extra charge",
      "price": 0,
      "fullPrice": 0
    },
    {
      "id": 2,
      "name": "Courier delivery",
      "abstract": "Packaged goods are delivered by our trusted forwarder.",
      "price": 81,
      "fullPrice": 81
    },
    {
      "id": 3,
      "name": "In-home courier delivery",
      "abstract": "Packaged goods are delivered inside at front door. <br>White glove delivery, unpacking, assembly, or removal of debris is optional on request.",
      "price": 156,
      "fullPrice": 156
    }
  ];
}

// step 4.
export async function getStores(checkout: any, market: string, locale: string): Promise<any> {
  return [
    {
      "id": 10366,
      "category": { "id": "store_category_distributor", "name": "Hexagon Distributor" },
      "name": "Di Paolo Arredamenti",
      "address": "Viale Cesare Battisti",
      "streetNumber": "80",
      "zipCode": "64020",
      "city": "Bellante",
      "country": { "id": "it", "name": "Italy" },
      "phoneNumber": "+39 0861 616436",
      "timetable": [],
      "position": {
        "latitude": 0.0,
        "longitude": 0.0
      },
      "distance": 151.84174300013095,
      "rank": 1
    }, {
      "id": 7430,
      "category": { "id": "store_category_distributor", "name": "Hexagon Distributor" },
      "name": "Mancini Italian Design & Art S.r.l.",
      "address": "Via Ascari",
      "streetNumber": "2",
      "zipCode": "41053",
      "city": "Maranello",
      "country": { "id": "it", "name": "Italy" },
      "email": "info@mancinimida.com",
      "timetable": [],
      "position": {
        "latitude": 0.0,
        "longitude": 0.0
      },
      "distance": 170.6551472799284,
      "rank": 2
    }, {
      "id": 325,
      "category": { "id": "store_category_distributor", "name": "Hexagon Distributor" },
      "name": "AD dal Pozzo",
      "address": "Via Mazzini",
      "streetNumber": "24",
      "zipCode": "36040",
      "city": "Grisignano Di Zocco",
      "country": { "id": "it", "name": "Italy" },
      "phoneNumber": "+39 0444 614521",
      "email": "mfort@websolute.it",
      "timetable": [],
      "position": {
        "latitude": 0.0,
        "longitude": 0.0
      },
      "distance": 196.0600048738732,
      "rank": 3
    }];
}

// step 5.
export async function getPayments(checkout: any, market: string, locale: string): Promise<any> {
  return [
    {
      "id": "alipay",
      "name": "Alipay",
      "media": {
        "type": "image",
        "src": "/assets/payment/alipay.svg"
      }
    },
    {
      "id": "amex",
      "name": "American Express",
      "media": {
        "type": "image",
        "src": "/assets/payment/american-express.svg"
      }
    },
    {
      "id": "apple-pay",
      "name": "Apple Pay",
      "media": {
        "type": "image",
        "src": "/assets/payment/apple-pay.svg"
      }
    },
    {
      "id": "bank-transfer",
      "name": "Bank Transfer",
      "media": {
        "type": "image",
        "src": "/assets/payment/bank-transfer.svg"
      }
    },
    {
      "id": "cbc",
      "name": "CBC",
      "media": {
        "type": "image",
        "src": "/assets/payment/cbc.svg"
      }
    },
    {
      "id": "direct-debit",
      "name": "Direct Debit",
      "media": {
        "type": "image",
        "src": "/assets/payment/direct-debit.svg"
      }
    },
    {
      "id": "googlepay",
      "name": "Google Pay",
      "media": {
        "type": "image",
        "src": "/assets/payment/googlepay.svg"
      }
    },
    {
      "id": "ideal",
      "name": "iDEAL",
      "media": {
        "type": "image",
        "src": "/assets/payment/ideal.svg"
      }
    },
    {
      "id": "maestro",
      "name": "Maestro",
      "media": {
        "type": "image",
        "src": "/assets/payment/maestro.svg"
      }
    },
    {
      "id": "mastercard",
      "name": "MasterCard",
      "abstract": "<p>You can use your Mastercard credit card. The 3DS authentication procedure will be used when the order is concluded, and you will be redirected to the bank's web page. To complete the order, follow the required steps.</p>",
      "media": {
        "type": "image",
        "src": "/assets/payment/mastercard.svg"
      }
    },
    {
      "id": "mybank",
      "name": "MyBank",
      "media": {
        "type": "image",
        "src": "/assets/payment/mybank.svg"
      }
    },
    {
      "id": "paypal",
      "name": "PayPal",
      "media": {
        "type": "image",
        "src": "/assets/payment/paypal.svg"
      }
    },
    {
      "id": "trustly",
      "name": "Trustly",
      "media": {
        "type": "image",
        "src": "/assets/payment/trustly.svg"
      }
    },
    {
      "id": "visa",
      "name": "Visa",
      "abstract": "<p>You can use your Visa credit card. The 3DS authentication procedure will be used when the order is concluded, and you will be redirected to the bank's web page. To complete the order, follow the required steps.</p>",
      "media": {
        "type": "image",
        "src": "/assets/payment/visa.svg"
      }
    },
    {
      "id": "wechatpay",
      "name": "WeChat Pay",
      "media": {
        "type": "image",
        "src": "/assets/payment/wechatpay.svg"
      }
    },
    {
      "id": "wire-transfer",
      "name": "Wire Transfer",
      "abstract": "<p>The order confirmation will contain a summary of the total amount to be paid and the details of the bank to which the payment is to be made..</p><p> Once the payment has been made, the order will be activated and the delivery terms indicated for the various items ordered will apply. The successful completion of the payment will be communicated by email to the email address indicated during registration.</p>",
      "media": {
        "type": "image",
        "src": "/assets/payment/wire-transfer.svg"
      }
    }
  ];
}

// payment
export async function getPayment(checkout: any, market: string, locale: string): Promise<{ redirectUrl: string }> {
  const knownRoutes = await getRoutesForSchemas(['checkout_result'], market, locale);
  // console.log('getPayment.knownRoutes', knownRoutes, checkout, market, locale);
  // !!! todo return payment redirectUrl
  const redirectUrl = `${knownRoutes.checkout_result}?order=1&status=OK`;
  return { redirectUrl };
}
