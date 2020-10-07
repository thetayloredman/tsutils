export = BetterMap;

declare class BetterMap extends Map {
    public constructor(iterable?: [string, any][]);
    public set(key: string, value?: any): this;
    public get(key: string): any;
    public delete(key: string): boolean;
}