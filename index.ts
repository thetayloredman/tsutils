/**
 * TSUtils
 * By BadBoyHaloCat
 * https://github.com/thetayloredman/tsutils/
 * 
 * This software is licensed under the GNU APL v3.0 licence.
 * See /LICENCE for more info.
 */

export class BetterMap extends Map {
    public constructor(iterable?: [string, any][]) {
        super();
        if (iterable) {
            for (let i of iterable) {
                super.set(i[0], i[1]);
            }
        }
    }

    public set(key: string, value?: any) {
        super.set(key, value);
        return this;
    }
}