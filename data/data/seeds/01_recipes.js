exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("recipes")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("recipes").insert([
				{ id: 1, name: "Strawberry cake" },
				{ id: 2, name: "Chocolate cake" },
				{
					id: 3,
					name: "Random cake",
					description: "its a cake made of random things"
				}
			]);
		});
};
