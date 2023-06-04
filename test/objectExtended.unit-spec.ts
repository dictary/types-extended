import {
	deepSortedObject,
	objectWithExcludedProperties,
	objectWithIncludedProperties,
	objectWithoutTimestamps,
	sortedObject,
	testObject,
} from "./data/testObjects";
import { ObjectExtended } from "../src";

describe("ObjectExtended", () => {
	describe("sort", () => {
		it.concurrent("should sort object", () => {
			const resultObject = new ObjectExtended(testObject).sort().getResult();
			expect(JSON.stringify(resultObject)).toBe(JSON.stringify(sortedObject));
		});
	});
	describe("deepSort", () => {
		it("should deep sort object", () => {
			const resultObject = new ObjectExtended(testObject)
				.deepSort()
				.getResult();
			expect(JSON.stringify(resultObject)).toBe(
				JSON.stringify(deepSortedObject)
			);
		});
	});
	describe("include", () => {
		it.concurrent("should include object properties", () => {
			const includeProperties = Object.keys(objectWithIncludedProperties);
			const resultObject = new ObjectExtended(testObject)
				.include(includeProperties)
				.getResult();
			expect(JSON.stringify(resultObject)).toBe(
				JSON.stringify(objectWithIncludedProperties)
			);
		});
	});
	describe("exclude", () => {
		it.concurrent("should exclude object properties", () => {
			const allKeys = Object.keys(testObject);
			const includedKeys = Object.keys(objectWithExcludedProperties);
			const excludedKeys = [];
			allKeys.forEach((key) => {
				if (!includedKeys.includes(key)) {
					excludedKeys.push(key);
				}
			});
			const resultObject = new ObjectExtended(testObject)
				.exclude(excludedKeys)
				.getResult();
			expect(JSON.stringify(resultObject)).toBe(
				JSON.stringify(objectWithExcludedProperties)
			);
		});
	});
	describe("withoutTimestamps", () => {
		it.concurrent("should remove object timestamps", () => {
			const resultObject = new ObjectExtended(testObject)
				.withoutTimestamps()
				.getResult();
			expect(JSON.stringify(resultObject)).toBe(
				JSON.stringify(objectWithoutTimestamps)
			);
		});
	});
});
