export = BetterMap;

declare class BetterMap extends Map {
    public constructor(iterable?: [string, any][]);
    public set(key: string, value?: any): this;
}