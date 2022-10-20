import { apiHandler } from '@websolute/core';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  post: async (request: NextApiRequest, response: NextApiResponse) => {
    // const locale: string | undefined = request.query.locale as string;
    const data = {
      payments: [
        {
          "id": "alipay",
          "name": "Alipay",
          "media": {
            "type": "image",
            "src": "/assets/checkout/alipay.png"
          }
        },
        {
          "id": "amex",
          "name": "American Express",
          "media": {
            "type": "image",
            "src": "/assets/checkout/amex.png"
          }
        },
        {
          "id": "apple-pay",
          "name": "Apple Pay",
          "media": {
            "type": "image",
            "src": "/assets/checkout/apple-pay.png"
          }
        },
        {
          "id": "bank-transfer",
          "name": "Bank Transfer",
          "media": {
            "type": "image",
            "src": "/assets/checkout/bank-transfer.png"
          }
        },
        {
          "id": "cbc",
          "name": "CBC",
          "media": {
            "type": "image",
            "src": "/assets/checkout/cbc.png"
          }
        },
        {
          "id": "direct-debit",
          "name": "Direct Debit",
          "media": {
            "type": "image",
            "src": "/assets/checkout/direct-debit.png"
          }
        },
        {
          "id": "googlepay",
          "name": "Google Pay",
          "media": {
            "type": "image",
            "src": "/assets/checkout/googlepay.png"
          }
        },
        {
          "id": "ideal",
          "name": "iDEAL",
          "media": {
            "type": "image",
            "src": "/assets/checkout/ideal.png"
          }
        },
        {
          "id": "maestro",
          "name": "Maestro",
          "media": {
            "type": "image",
            "src": "/assets/checkout/maestro.png"
          }
        },
        {
          "id": "mastercard",
          "name": "MasterCard",
          "abstract": "<p>You can use your Mastercard credit card. The 3DS authentication procedure will be used when the order is concluded, and you will be redirected to the bank's web page. To complete the order, follow the required steps.</p>",
          "media": {
            "type": "image",
            "src": "/assets/checkout/mastercard.png"
          }
        },
        {
          "id": "mybank",
          "name": "MyBank",
          "media": {
            "type": "image",
            "src": "/assets/checkout/mybank.png"
          }
        },
        {
          "id": "paypal",
          "name": "PayPal",
          "media": {
            "type": "image",
            "src": "/assets/checkout/paypal.png"
          }
        },
        {
          "id": "trustly",
          "name": "Trustly",
          "media": {
            "type": "image",
            "src": "/assets/checkout/trustly.png"
          }
        },
        {
          "id": "visa",
          "name": "Visa",
          "abstract": "<p>You can use your Visa credit card. The 3DS authentication procedure will be used when the order is concluded, and you will be redirected to the bank's web page. To complete the order, follow the required steps.</p>",
          "media": {
            "type": "image",
            "src": "/assets/checkout/visa.png"
          }
        },
        {
          "id": "wechatpay",
          "name": "WeChat Pay",
          "media": {
            "type": "image",
            "src": "/assets/checkout/wechatpay.png"
          }
        },
        {
          "id": "wire-transfer",
          "name": "Wire Transfer",
          "abstract": "<p>The order confirmation will contain a summary of the total amount to be paid and the details of the bank to which the payment is to be made..</p><p> Once the payment has been made, the order will be activated and the delivery terms indicated for the various items ordered will apply. The successful completion of the payment will be communicated by email to the email address indicated during registration.</p>",
          "media": {
            "type": "image",
            "src": "/assets/checkout/wire-transfer.png"
          }
        }
      ]
    };
    response.status(200).json(data);
  },
});
