const DB = require("../data/db-config");
const TABLE = "recipes";

const getAll = () => {
	return DB(TABLE);
};
const getById = id => {
	return DB(TABLE).where({ id });
};
const getShoppingList = id => {
	return DB(TABLE)
		.column("ingredients.name", "ingredients.quantity")
		.where(TABLE + ".id", "=", id)
		.join(
			"recipe_ingredients",
			"recipe_ingredients.recipe_id",
			"=",
			TABLE + ".id"
		)
		.join(
			"ingredients",
			"recipe_ingredients.ingredient_id",
			"=",
			"ingredients.id"
		);
};

const getInstructions = id => {
	return DB(TABLE)
		.column("steps.step")
		.where(TABLE + ".id", "=", id)
		.join("steps", TABLE + ".id", "=", "steps.recipe_id")
		.orderBy("steps.id", "asc");
};

const insert = fields => {
	return DB(TABLE).insert(fields);
};

const update = (id, fields) => {
	return DB(TABLE)
		.where({ id })
		.update(fields);
};

const deleteEntry = ({ id }) => {
	return DB(TABLE)
		.where({ id })
		.delete();
};

module.exports = {
	getAll,
	insert,
	update,
	deleteEntry,
	getById,
	getShoppingList,
	getInstructions
};
