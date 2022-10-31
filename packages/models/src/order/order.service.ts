import { IEquatable } from '@websolute/core';
import { IOrder } from './order';

export async function getOrder(id: IEquatable, market: string, locale: string): Promise<IOrder> {
  const data__ = {
    "id": 1,
    "date": "2022-10-25T10:59:54.420Z",
    "status": "awaitingFulfillment" as const,
    "items": [
      {
        "title": "Cabinet Large dark oak",
        "media": {
          "type": "image",
          "src": "/assets/shop_detail/2693_n_Cabinet_large_dark_oak_440px_a.jpg"
        },
        "categoryId": "shop_category_furniture",
        "collection": "Accents Accessories",
        "designer": "Oeo Studio",
        "category": "Accents Accessories by Oeo Studio",
        "description": "<p>Mobiletto in legno di rovere e cinghie in pelle da appendere a Rack 72/192.</p> <p>Colore: Rovere scuro + Pelle conciata al vegetale<br />Misure: 14,7 x 48 x 40,5 (H) cm</p>",
        "price": 2576,
        "fullPrice": 2576,
        "slug": "cabinet-large-dark-oak",
        "id": 156,
        "schema": "shop_detail",
        "href": "/ww/en/shop/furniture/cabinet-large-dark-oak",
        "qty": 2
      },
      {
        "media": {
          "type": "image",
          "src": "/assets/shop_detail/2699_n_Cabinet-Small-Light-oak-Vegetable-tanned-leather-14,7-x-48-x-17,5-H-cm_DETTAGLIO.jpg"
        },
        "categoryId": "shop_category_furniture",
        "collection": "Accents Accessories",
        "designer": "Oeo Studio",
        "category": "Accents Accessories by Oeo Studio",
        "title": "Cabinet Small light oak",
        "price": 1149,
        "fullPrice": 1149,
        "slug": "cabinet-small-light-oak",
        "id": 159,
        "schema": "shop_detail",
        "href": "/ww/en/shop/furniture/cabinet-small-light-oak",
        "qty": 2
      }
    ],
    /*
    "user": {
      "id": 1,
      "firstName": "Jhon",
      "lastName": "Appleseed",
      "email": "jhon.appleseed@gmail.com"
    },
    */
    "shippingAddress": {
      "firstName": "Jhon",
      "lastName": "Appleseed",
      "email": "jhon.appleseed@gmail.com",
      "phoneNumber": "0721411112",
      "country": {
        "id": "it",
        "name": "Italy"
      },
      "region": {
        "id": 10,
        "name": "Marche"
      },
      "province": {
        "id": 175,
        "name": "Pesaro Urbino"
      },
      "address": "Strada della Campanara",
      "streetNumber": "15",
      "zipCode": "61122",
      "city": "Pesaro"
    },
    "delivery": {
      "id": 2,
      "name": "Courier delivery",
      "abstract": "Packaged goods are delivered by our trusted forwarder.",
      "price": 81,
      "fullPrice": 81
    },
    "store": {
      "id": 10366,
      "category": {
        "id": "store_category_distributor",
        "name": "Hexagon Distributor"
      },
      "name": "Di Paolo Arredamenti",
      "address": "Viale Cesare Battisti",
      "streetNumber": "80",
      "zipCode": "64020",
      "city": "Bellante",
      "country": {
        "id": "it",
        "name": "Italy"
      },
      "phoneNumber": "+39 0861 616436",
      "timetable": [],
      "position": {
        "latitude": 0,
        "longitude": 0
      },
      "distance": 151.84174300013095,
      "rank": 1
    },
    "discounts": [{
      "id": "shipping",
      "name": "shipping",
      "abstract": "Free shipping",
      "price": -81,
      "validFrom": "2022-10-25T10:59:54.420Z",
      "validTo": "2022-10-25T10:59:54.420Z",
    }],
    "payment": {
      "id": "amex",
      "name": "American Express",
      "media": {
        "type": "image",
        "src": "/assets/payment/american-express.svg"
      }
    },
    "subTotal": 3725,
    "subTotalFull": 3725,
    "taxes": 745,
    "total": 4470
  };
  const data = {
    "id": 1,
    "date": "2022-10-25T10:59:54.420Z",
    "status": "awaitingFulfillment" as const,
    "items": [{
      "title": "Cabinet Large dark oak",
      "media": {
        "type": "image",
        "src": "/assets/shop_detail/2693_n_Cabinet_large_dark_oak_440px_a.jpg"
      },
      "categoryId": "shop_category_furniture",
      "collection": "Accents Accessories",
      "designer": "Oeo Studio",
      "category": "Accents Accessories by Oeo Studio",
      "description": "<p>Mobiletto in legno di rovere e cinghie in pelle da appendere a Rack 72/192.</p> <p>Colore: Rovere scuro + Pelle conciata al vegetale<br />Misure: 14,7 x 48 x 40,5 (H) cm</p>",
      "price": 2318.4,
      "availability": 6,
      "slug": "cabinet-large-dark-oak",
      "id": 156,
      "schema": "shop_detail",
      "href": "/ww/en/shop/furniture/cabinet-large-dark-oak",
      "qty": 1,
      "fullPrice": 2576
    }, {
      "media": {
        "type": "image",
        "src": "/assets/shop_detail/2697_n_Cabinet-Large-Light-oak-Vegetable-tanned-leather-14,7-x-48-x-40,5-H-cm_DETTAGLIO.jpg"
      },
      "categoryId": "shop_category_furniture",
      "collection": "Accents Accessories",
      "designer": "Oeo Studio",
      "category": "Accents Accessories by Oeo Studio", "title": "Cabinet Large light oak",
      "price": 2318.4,
      "availability": 6,
      "slug": "cabinet-large-light-oak",
      "id": 157,
      "schema": "shop_detail",
      "href": "/ww/en/shop/furniture/cabinet-large-light-oak",
      "qty": 1,
      "fullPrice": 2576
    }],
    /*
    "user": {
      "id": 1,
      "schema": "user",
      "firstName": "Jhon",
      "lastName": "Appleseed", "email": "jhon.appleseed@gmail.com"
    },
    */
    "shippingAddress": {
      "firstName": "Jhon",
      "lastName": "Appleseed",
      "email": "jhon.appleseed@gmail.com",
      "phoneNumber": "0721411112",
      "country": {
        "id": "it",
        "name": "Italy"
      },
      "region": {
        "id": 10,
        "name": "Marche"
      },
      "province": {
        "id": 175, "name": "Pesaro Urbino"
      },
      "address": "Strada della Campanara",
      "streetNumber": "15",
      "zipCode": "61122",
      "city": "Pesaro"
    },
    "hasInvoice": true,
    "hasBilling": false,
    "delivery": {
      "id": 2,
      "name": "Courier delivery",
      "abstract": "Packaged goods are delivered by our trusted forwarder.",
      "price": 81,
      "fullPrice": 81
    },
    "discounts": [{
      "id": "shipping",
      "name": "shipping",
      "abstract": "Free shipping",
      "price": -81,
      "validFrom": "2022-10-31T09:17:08.309Z",
      "validTo": "2022-10-31T09:17:08.309Z"
    }
    ],
    "store": {
      "id": 10366,
      "category": {
        "id": "store_category_distributor", "name": "Hexagon Distributor"
      },
      "name": "Di Paolo Arredamenti",
      "address": "Viale Cesare Battisti",
      "streetNumber": "80",
      "zipCode": "64020",
      "city": "Bellante",
      "country": {
        "id": "it",
        "name": "Italy"
      },
      "phoneNumber": "+39 0861 616436",
      "timetable": [],
      "position": {
        "latitude": 0,
        "longitude": 0
      },
      "distance": 151.84174300013095,
      "rank": 1
    },
    "payment": {
      "id": "bank-transfer",
      "name": "Bank Transfer",
      "media": {
        "type": "image",
        "src": "/assets/payment/bank-transfer.svg"
      }
    },
    "subTotal": 4636.8,
    "taxes": 927.3600000000001,
    "total": 5564.16,
    "subTotalFull": 5152
  }
  return data;
}

