import { apiHandler } from '@websolute/core';
import { NextApiRequest, NextApiResponse } from 'next';


// https://github.com/MultiSafepay/MultiSafepay-icons

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
      ]
    };
    response.status(200).json(data);
  },
});
