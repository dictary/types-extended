"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayExtended = void 0;
class ArrayExtended {
    constructor(array) {
        if (Array.isArray(array)) {
            this.array = JSON.parse(JSON.stringify(array));
        }
        else {
            throw new Error("Types-Extended: type should be array");
        }
    }
    isNotBuiltInObject(value) {
        const builtInTypes = [
            "[object Date]",
            "[object Number]",
            "[object String]",
            "[object Number]",
        ];
        return !builtInTypes.includes(Object.prototype.toString.call(value));
    }
    getResult() {
        return this.array;
    }
    getResultAsString() {
        return JSON.stringify(this.array);
    }
    include(properties) {
        this.array = this.array.map((elem) => {
            const newObject = {};
            properties.forEach((property) => {
                newObject[property] = elem[property];
            });
            return newObject;
        });
        return this;
    }
    exclude(properties) {
        this.array = this.array.map((elem) => {
            const newObject = elem;
            properties.forEach((property) => {
                delete newObject[property];
            });
            return newObject;
        });
        return this;
    }
    withoutTimestamps() {
        this.exclude([
            "createdAt",
            "created_at",
            "updatedAt",
            "updated_at",
            "deletedAt",
            "deleted_at",
        ]);
        return this;
    }
    sortByProperty(property, direction = "asc") {
        const isAsc = direction === "asc";
        this.array = this.array.sort((a, b) => {
            if (a[property] > b[property]) {
                return isAsc ? 1 : -1;
            }
            if (a[property] < b[property]) {
                return isAsc ? -1 : 1;
            }
            return 0;
        });
        return this;
    }
}
exports.ArrayExtended = ArrayExtended;
