exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("steps")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("steps").insert([
				{ recipe_id: 1, step: "Add flour" },
				{ recipe_id: 1, step: "Add sugar" },
				{ recipe_id: 2, step: "Add flour" },
				{ recipe_id: 2, step: "Add sugar" }
			]);
		});
};
