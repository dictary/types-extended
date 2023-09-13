export declare class ArrayExtended {
    private array;
    constructor(array: object[]);
    isNotBuiltInObject(value: any): boolean;
    getResult(): object[];
    getResultAsString(): string;
    include(properties: string[]): this;
    exclude(properties: string[]): this;
    withoutTimestamps(): this;
    sortByProperty(property: string, direction?: "asc" | "desc"): this;
}
