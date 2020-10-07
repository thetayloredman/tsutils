export = BetterMap;

declare class BetterMap extends Map {
    public constructor(iterable?: IterableIterator<[string, any]>);
    public set(key: string, value?: any): this;
    public get(key: string): any;
    public delete(key: string): boolean;
    public keys(): IterableIterator<string>;
    public entries(): IterableIterator<[string, any]>;
    public values(): IterableIterator<any>;
    public deleteAll(): this;
}