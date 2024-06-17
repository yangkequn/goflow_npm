import OptionClass, { Option, configure, setDefaultSUToken } from "./Option";
import streamKey from "./streamKey";
import setKey from "./setKeys";
import stringKey from "./stringKey";
import listKey from "./listKey";
import hashKey from "./hashkey";
import sortedSetKey from "./sortedSetKey";
import api from "./api";
export declare const msgpackDecode: (data: any) => any;
export declare enum urlGetCmd {
    HEXISTS = "HEXISTS",
    GET = "GET",
    HGET = "HGET",
    HGETALL = "HGETALL",
    HMGET = "HMGET"
}
export declare const urlGet: (cmd: urlGetCmd | undefined, Key: string, Field?: string, opt?: OptionClass) => string;
export declare const time: (opt?: OptionClass) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const scan: (Cursor: number, Match: string, Count?: number, opt?: OptionClass) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const type: (Key: string, opt?: OptionClass) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const del: (Key: string, opt?: OptionClass) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const exists: (Key: string, opt?: OptionClass) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const expire: (Key: string, Seconds: number, opt?: OptionClass) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const expireAt: (Key: string, Timestamp: number, opt?: OptionClass) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const persist: (Key: string, opt?: OptionClass) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const ttl: (Key: string, opt?: OptionClass) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const pttl: (Key: string, opt?: OptionClass) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const keys: (Pattern: string, opt?: OptionClass) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const rename: (Key: string, NewKey: string, opt?: OptionClass) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const renamenx: (Key: string, NewKey: string, opt?: OptionClass) => Promise<import("axios").AxiosResponse<any, any>>;
export default configure;
export { streamKey, setKey, stringKey, listKey, hashKey, sortedSetKey };
export { setDefaultSUToken };
export { Option, OptionClass };
export { api };
