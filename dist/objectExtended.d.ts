export declare class ObjectExtended {
    private object;
    constructor(object: object);
    isNotBuiltInObject(value: any): boolean;
    getResult(): object;
    sort(): this;
    deepSort(): this;
    private recursiveSort;
    include(properties: string[]): this;
    exclude(properties: string[]): this;
    withoutTimestamps(): this;
}
