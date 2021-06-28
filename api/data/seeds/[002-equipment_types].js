
exports.seed = function(knex) {
  return knex('equipment_types').insert([
    {equipment_type: "wires and cables"},
    {equipment_type: "phones"},
    {equipment_type: "computers"},
    {equipment_type: "printers"},
    {equipment_type: "radios"},
    {equipment_type: "a/v equipment"},
    {equipment_type: "kitchen appliances"},
    {equipment_type: "gaming consoles"}
  ]);
}