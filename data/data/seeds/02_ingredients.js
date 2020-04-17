exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("ingredients")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("ingredients").insert([
				{ id: 1, name: "Sugar", quantity: 10 },
				{ id: 2, name: "Flour", quantity: 20 }
			]);
		});
};
