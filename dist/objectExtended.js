"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectExtended = void 0;
const isobject_1 = __importDefault(require("isobject"));
class ObjectExtended {
    constructor(object) {
        if ((0, isobject_1.default)(object) && this.isNotBuiltInObject(object)) {
            this.object = structuredClone(object);
        }
        else {
            throw new Error("Types-Extended: type should be object");
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
        return this.object;
    }
    getResultAsString() {
        return this.object.toString();
    }
    sort() {
        const keys = Object.keys(this.object).sort();
        const sortedObject = {};
        for (const key of keys) {
            sortedObject[key] = this.object[key];
        }
        this.object = sortedObject;
        return this;
    }
    deepSort() {
        this.object = this.recursiveSort(this.object);
        return this;
    }
    recursiveSort(obj) {
        const sortedObject = {};
        for (const key of Object.keys(obj).sort()) {
            if ((0, isobject_1.default)(obj[key]) && this.isNotBuiltInObject(obj[key])) {
                sortedObject[key] = this.recursiveSort(obj[key]);
            }
            else {
                sortedObject[key] = obj[key];
            }
        }
        return sortedObject;
    }
    include(properties) {
        const filteredObject = {};
        for (const key of Object.keys(this.object)) {
            if (properties.includes(key)) {
                filteredObject[key] = this.object[key];
            }
        }
        this.object = filteredObject;
        return this;
    }
    exclude(properties) {
        const filteredObject = structuredClone(this.object);
        for (const property of properties) {
            delete filteredObject[property];
        }
        this.object = filteredObject;
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
}
exports.ObjectExtended = ObjectExtended;
