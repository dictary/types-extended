import isObject from "isobject";
export class ObjectExtended {
	private object: object;
	constructor(object: object) {
		if (isObject(object) && this.isNotBuiltInObject(object)) {
			this.object = structuredClone(object);
		} else {
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
		return JSON.stringify(this.object);
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

	private recursiveSort(obj: object) {
		const sortedObject = {};
		for (const key of Object.keys(obj).sort()) {
			if (isObject(obj[key]) && this.isNotBuiltInObject(obj[key])) {
				sortedObject[key] = this.recursiveSort(obj[key]);
			} else {
				sortedObject[key] = obj[key];
			}
		}

		return sortedObject;
	}

	include(properties: string[]) {
		const filteredObject = {};
		for (const key of Object.keys(this.object)) {
			if (properties.includes(key)) {
				filteredObject[key] = this.object[key];
			}
		}
		this.object = filteredObject;
		return this;
	}

	exclude(properties: string[]) {
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
