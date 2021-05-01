
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("recipes").insert([
    {name: "pot pie", steps: "make it!"},
    {name: "baked veggies", steps: "make it"}
  ])
};