import { apiHandler } from '@websolute/core';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  get: async (request: NextApiRequest, response: NextApiResponse) => {
    // const locale: string | undefined = request.query.locale as string;
    const data = {
      deliveries: [
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
      ]
    };
    response.status(200).json(data);
  },
});
