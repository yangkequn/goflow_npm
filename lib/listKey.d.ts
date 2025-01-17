import RequestOptions from "./Option";
export default class listKey<T> {
    key: string;
    dataSchemaInstace: T | null;
    constructor(key: string, dataSchemaInstace?: T | null);
    ConcatKey(...fields: any[]): listKey<T>;
    lIndex: (Index: number, opt?: RequestOptions) => Promise<import("axios").AxiosResponse<any, any>>;
    lPop: (opt?: RequestOptions) => Promise<import("axios").AxiosResponse<any, any>>;
    lPush: (data: any, opt?: RequestOptions) => Promise<import("axios").AxiosResponse<any, any>>;
    lRem: (Count: number, data: any, opt?: RequestOptions) => Promise<import("axios").AxiosResponse<any, any>>;
    lSet: (Index: number, data: any, opt?: RequestOptions) => Promise<import("axios").AxiosResponse<any, any>>;
    lTrim: (Start: number, Stop: number, opt?: RequestOptions) => Promise<import("axios").AxiosResponse<any, any>>;
    rPop: (opt?: RequestOptions) => Promise<import("axios").AxiosResponse<any, any>>;
    rPush: (data: any, opt?: RequestOptions) => Promise<import("axios").AxiosResponse<any, any>>;
    rPushX: (data: any, opt?: RequestOptions) => Promise<import("axios").AxiosResponse<any, any>>;
    lLen: (opt?: RequestOptions) => Promise<import("axios").AxiosResponse<any, any>>;
    lRange: (Start: number, Stop: number, opt?: RequestOptions) => Promise<import("axios").AxiosResponse<any, any>>;
}
