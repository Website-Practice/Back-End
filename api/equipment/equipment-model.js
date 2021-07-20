const db = require('../data/db-config.js');

function getEquipment() {
    return db('equipment');
}

function findEquipmentById(equipment_id) {
    return db('equipment').where({ equipment_id }).first()
}

function findEquipmentByOwner(owner_id) {
    return db('equipment').where({owner_id})
}


function createEquipment(equipment) {
    return db('equipment').insert(equipment)
}

function findOwner(owner_id) {
    return db('equipment')
        .select('equipment_id', 'equipment_name', 'owner_id')
        .where('owner_id', owner_id)
}

function updateEquipment(equipment_id, owner_id) {
    return db('equipment')
        .where('equipment_id', equipment_id)
        .update('owner_id', owner_id)
}

function deleteEquipment(equipment_id, owner_id) {
    return db('equipment')
        .select('owner_id', owner_id)
        .where('equipment_id', equipment_id)
        .del()
}

module.exports = {
    getEquipment,
    findEquipmentById,
    findEquipmentByOwner,
    createEquipment,
    findOwner,
    updateEquipment,
    deleteEquipment

}