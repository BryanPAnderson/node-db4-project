
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("ingredients").insert([
    {name:"Turkey"},
    {name:"Green Beans"},
    {name:"dough"}
  ])
};
