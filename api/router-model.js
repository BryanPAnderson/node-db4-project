const db = require("../data/config");

const getRecipesById = (recipe_id) => {
    return db("recipes").where({id}).first()
}

const getIngredientsById = (id) => {
    return db("ingredients").where({id}).first()
}

const getRecipe_ideasById = (recipe_id) => {
    return db("recipe_ideas").where({recipe_id}).first()
}

module.exports = {
    getRecipesById,
    getIngredientsById,
    getRecipe_ideasById
}