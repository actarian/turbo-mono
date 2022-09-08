export declare function fsExists(pathname: string): Promise<boolean>;
export declare function fsRead(pathname: string, encoding?: string): Promise<any>;
export declare function fsReadJson(pathname: string): Promise<any>;
export declare function fsWrite(pathname: string, data: string, encoding?: string): Promise<void>;
export declare function fsWriteJson(pathname: string, data: any): Promise<void>;
export declare function fsExistOrCreateFolder(pathname: string): Promise<void>;
export declare function fsReadDirectory(pathname: string, extension?: string): Promise<{
    name: string;
    data: string;
}[]>;
export declare function fsReadJsonDirectory(pathname: string): Promise<{
    name: string;
    data: any;
}[]>;
export declare function fsWatch(pathname: string, callback: (eventType: any, fileName: string) => void, options?: {
    interval: 2000;
}): void;
export declare function fsWatchFile(pathname: string, callback: (eventType: any, fileName: string) => void, options?: {
    interval: 2000;
}): void;
export declare function pathJoin(...paths: string[]): string;
export declare function debounce(callback: (...args: any[]) => void, timeout?: number): (...args: any[]) => void;
//# sourceMappingURL=fs.service.d.ts.map