export declare class ObjectExtended {
    private object;
    constructor(object: object);
    isNotBuiltInObject(value: any): boolean;
    getResult(): object;
    getResultAsString(): string;
    sort(): this;
    deepSort(): this;
    private recursiveSort;
    include(properties: string[]): this;
    exclude(properties: string[]): this;
    withoutTimestamps(): this;
}
