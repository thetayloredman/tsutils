/**
 * TSUtils
 * By BadBoyHaloCat
 * https://github.com/thetayloredman/tsutils/
 * 
 * This software is licensed under the GNU APL v3.0 licence.
 * See /LICENCE for more info.
 */

export class BetterMap extends Map {
    public constructor(iterable?: IterableIterator<[string, any]>) {
        super();
        if (iterable) {
            for (let i of iterable) {
                super.set(i[0], i[1]);
            }
        }
    }

    public set(key: string, value?: any): this {
        super.set(key, value);
        return this;
    }

    public get(key: string): any {
        return super.get(key);
    }

    public delete(key: string): boolean {
        return super.delete(key);
    }

    public keys(): IterableIterator<string> {
        return super.keys();
    }

    public entries(): IterableIterator<[string, any]> {
        return super.entries();
    }

    public values(): IterableIterator<any> {
        return super.values();
    }

    public deleteAll(): this {
        let keys = this.keys();
        for (let i of keys) {
            this.delete(i);
        }
        return this;
    }
}