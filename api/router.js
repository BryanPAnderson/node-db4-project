const express = require("express");
const db = require("./router-model")
const router = express.Router();

router.get("/recipes/:id", async (req, res, next) => {
    try {
        await db.getRecipesById(req.params.id)
            .then((recipe) => {
                res.status(200).json(recipe)
            })
    }
    catch (err) {
        next(err)
    }
})

router.get("/ingredients/:id", async (req, res, next) => {
    try {
        await db.getIngredientsById(req.params.id)
            .then((ingredient) => {
                res.status(200).json(ingredient)
            })
    }
    catch (err) {
        next(err)
    }
})

router.get("/recipe_ideas/:id", async (req, res, next) => {
    try {
        await db.getRecipe_ideasById()
            .then((recipe_idea) => {
                res.status(200).json(recipe_idea)
            })
    }
    catch (err) {
        next(err)
    }
})

module.exports = router;