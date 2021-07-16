const Equipment = require('./equipment-model.js');


const checkId = (req, res, next) => {
    const id = req.params.equipment_id
    Equipment.findEquipmentById(id)
        .then(equipment => {
            if (!equipment) {
                res.status(404).json({
                    message: "Equipment not found"
                })
            } else {
                next()
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            })
        })
}

const checkOwnerId = (req, res, next) => {
    const id = req.params.owner_id
    Equipment.findOwner(id)
        .then(owner => {
            if (!owner) {
                res.status(404).json({
                    message: "Lister not found"
                })
            } else {
                next()
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            })
        })
}

module.exports = {
    checkId,
    checkOwnerId,
}