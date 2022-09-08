export declare function getIsDevelopment(): boolean;
export declare const isDevelopment: boolean;
export declare const isBrowser: boolean;
export declare function asStaticProps(props: any): any;
export declare function awaitAll(array: any, callback: (item: any, index: number) => Promise<any>): Promise<any[]>;
export declare function merge(target: any, source: any): any;
export declare type StateValue = StateValue[] | {
    [key: string]: StateValue;
} | number | string | boolean | null | undefined;
export declare function deepCopy<T>(source: T): T;
export declare function className(...args: ({
    [key: string]: boolean;
} | string)[]): string;
//# sourceMappingURL=index.d.ts.map