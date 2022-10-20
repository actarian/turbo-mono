import { apiHandler } from '@websolute/core';
import { getCountries, getProvinces, getRegions } from '@websolute/models';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler({
  get: async (request: NextApiRequest, response: NextApiResponse) => {
    const locale: string | undefined = request.query.locale as string;
    const countries = await getCountries(locale);
    const provinces = await getProvinces(locale);
    const regions = await getRegions(locale);
    const data = { countries, regions, provinces };
    response.status(200).json(data);
    /*
    if (data) {
      response.status(200).json(data);
    } else {
      throw 'not found';
      // response.status(404).send('not found');
    }
    */
  },
});
