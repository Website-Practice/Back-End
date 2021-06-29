
exports.seed = function (knex) {
  return knex('equipment').insert([
    {
      equipment_name: "Shitty Ass Mac",
      equipment_description: "It doesn't work and I hate it so take it the fuck away",
      cost: 20.00,
      owner: 1,
      equipment_type_id: 3
    },
    {
      equipment_name: "Rat-chewed cables",
      equipment_description: "You heard me",
      cost: 5.00,
      owner: 2,
      equipment_type_id: 1
    },
    {
      equipment_name: "Broken phone",
      equipment_description: "Can't even take pictures. Give to your shit-ass 5 year old to make them feel cool",
      cost: 10.00,
      owner: 3,
      equipment_type_id: 2
    }
  ]);
}