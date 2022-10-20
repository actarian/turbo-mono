import { apiHandler } from '@websolute/core';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  post: async (request: NextApiRequest, response: NextApiResponse) => {
    // const locale: string | undefined = request.query.locale as string;
    const data = {
      stores: [
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
        }]
    };
    response.status(200).json(data);
  },
});
