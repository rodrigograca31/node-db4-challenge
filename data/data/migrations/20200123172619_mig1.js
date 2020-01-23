exports.up = function(knex) {
	return knex.schema
		.createTable("recipes", tbl => {
			tbl.increments().notNullable(); // create column named "id", primary key, auto-incrementing
			tbl.text("name")
				.notNullable()
				.unique();
			tbl.string("description", 140);
		})
		.createTable("ingredients", tbl => {
			tbl.increments().notNullable(); // create column named "id", primary key, auto-incrementing
			tbl.text("name")
				.notNullable()
				.unique();
			tbl.float("quantity").notNullable();
		})
		.createTable("steps", tbl => {
			tbl.increments().notNullable(); // create column named "id", primary key, auto-incrementing
			tbl.string("step", 250).notNullable();

			tbl.integer("recipe_id")
				.notNullable()
				.references("id")
				.inTable("recipes")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
		})
		.createTable("recipe_ingredients", tbl => {
			// tbl.increments().notNullable(); // create column named "id", primary key, auto-incrementing
			// tbl.string("step", 250).notNullable();

			tbl.integer("recipe_id")
				.notNullable()
				.references("id")
				.inTable("recipes")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");

			tbl.integer("ingredient_id")
				.notNullable()
				.references("id")
				.inTable("ingredients")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists("steps")
		.dropTableIfExists("recipe_ingredients")
		.dropTableIfExists("recipes")
		.dropTableIfExists("ingredients");
};
