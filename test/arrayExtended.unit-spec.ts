import {
	arraySortedByFirsNameDesc,
	arraySortedByLastNameAsc,
	arrayWithExcludeProperties,
	arrayWithIncludeProperties,
	testArray,
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
	it("sortByProperty asc", () => {
		const resultArray = new ArrayExtended(testArray)
			.sortByProperty("lastName", "asc")
			.getResultAsString();
		expect(resultArray).toBe(JSON.stringify(arraySortedByLastNameAsc));
	});
	it("sortByProperty desc", () => {
		const resultArray = new ArrayExtended(testArray)
			.sortByProperty("firstName", "desc")
			.getResultAsString();
		expect(resultArray).toBe(JSON.stringify(arraySortedByFirsNameDesc));
	});
});
