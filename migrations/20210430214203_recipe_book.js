exports.up = async function(knex) {
    await knex.schema.createTable('recipes', tbl => {
        tbl.increments('id')
        tbl.text('name').notNull()
        tbl.string('steps').notNull()
    })
    await knex.schema.createTable("ingredients", tbl => {
        tbl.increments("id")
        tbl.text("name").notNull()
    })
    await knex.schema.createTable("recipe_ideas", tbl => {
        tbl.integer('recipe_id').notNull().references('id').inTable('recipes')
        tbl.integer('ingredient_id').notNull().references('id').inTable("ingredients")
        tbl.float('ingredient_quantity').notNull()
        tbl.primary(["recipe_id", "ingredient_id"])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_ideas")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};