import { NextApiRequest, NextApiResponse } from 'next';
export declare type ICrudMethod = 'get' | 'post' | 'put' | 'delete';
export declare type IApiHandler = {
    [key: string]: (request: NextApiRequest, response: NextApiResponse) => Promise<any>;
};
export declare function apiHandler(handler: IApiHandler): any;
export declare function errorHandler(error: any, response: NextApiResponse): Promise<any> | void;
//# sourceMappingURL=api.helper.d.ts.map