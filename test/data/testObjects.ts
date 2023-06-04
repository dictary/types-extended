export const testObject = {
	id: 1,
	type: "donut",
	name: "Cake",
	topping: {
		none: {
			id: 121,
			field: "id",
		},
		glazed: { field: "id", id: 121 },
		sugar: {},
	},
	ppu: 0.55,
	batters: {
		batter: [{ type: "regular" }, { type: "chocolate" }, { type: "BlueBerry" }],
		agon: "33",
	},
	createdAt: new Date(),
	updated_at: new Date(),
};
export const sortedObject = {
	batters: {
		batter: [{ type: "regular" }, { type: "chocolate" }, { type: "BlueBerry" }],
		agon: "33",
	},
	createdAt: new Date(),
	id: 1,
	name: "Cake",
	ppu: 0.55,
	topping: {
		none: {
			id: 121,
			field: "id",
		},
		glazed: { field: "id", id: 121 },
		sugar: {},
	},
	type: "donut",
	updated_at: new Date(),
};
export const deepSortedObject = {
	batters: {
		agon: "33",
		batter: [{ type: "regular" }, { type: "chocolate" }, { type: "BlueBerry" }],
	},
	createdAt: new Date(),
	id: 1,
	name: "Cake",
	ppu: 0.55,
	topping: {
		glazed: { field: "id", id: 121 },
		none: {
			field: "id",
			id: 121,
		},
		sugar: {},
	},
	type: "donut",
	updated_at: new Date(),
};
export const objectWithIncludedProperties = {
	id: 1,
	type: "donut",
	name: "Cake",
	batters: {
		batter: [{ type: "regular" }, { type: "chocolate" }, { type: "BlueBerry" }],
		agon: "33",
	},
};
export const objectWithExcludedProperties = {
	id: 1,
	type: "donut",
	name: "Cake",
	topping: {
		none: {
			id: 121,
			field: "id",
		},
		glazed: { field: "id", id: 121 },
		sugar: {},
	},
	createdAt: new Date(),
	updated_at: new Date(),
};
export const objectWithoutTimestamps = {
	id: 1,
	type: "donut",
	name: "Cake",
	topping: {
		none: {
			id: 121,
			field: "id",
		},
		glazed: { field: "id", id: 121 },
		sugar: {},
	},
	ppu: 0.55,
	batters: {
		batter: [{ type: "regular" }, { type: "chocolate" }, { type: "BlueBerry" }],
		agon: "33",
	},
};
