import {
	testArray,
	arrayWithExcludeProperties,
	arrayWithIncludeProperties,
} from "./data/testArrays";
import { ArrayExtended } from "../src";

describe("ArrayExtended", () => {
	it("exclude", () => {
		const resultArray = new ArrayExtended(testArray)
			.exclude(["age", "sex"])
			.getResultAsString();
		expect(resultArray).toBe(JSON.stringify(arrayWithExcludeProperties));
	});
	it("include", () => {
		const resultArray = new ArrayExtended(testArray)
			.include(["firstName", "lastName"])
			.getResultAsString();
		expect(resultArray).toBe(JSON.stringify(arrayWithIncludeProperties));
	});
});
