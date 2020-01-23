CREATE TABLE recipes (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	description TEXT(140)
);

CREATE TABLE ingredients (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	name TEXT(30) NOT NULL
);

CREATE TABLE recipe_ingredients (
	recipe_id INTEGER REFERENCES recipes (id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL, 
	ingredient_id INTEGER REFERENCES ingredients (id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL
);

CREATE TABLE steps (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	step TEXT (250) NOT NULL, 
	recipe_id INTEGER REFERENCES recipes (id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL
);
