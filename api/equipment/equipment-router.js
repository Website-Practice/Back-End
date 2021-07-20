const router = require('express').Router()
const Equipment = require('./equipment-model.js');
// const tokenBuilder = require('../middleware/tokenbuilder.js')
// const bcrypt = require('bcryptjs')
const {
    checkId,
    checkOwnerId,
    restrict
} = require('./equipment-middleware.js')

router.get('/', (req, res, next) => {
    Equipment.getEquipment()
        .then(equipment => {
            res.status(200).json(equipment)
        })
        .catch(next)
})

router.get('/:owner_id', (req, res, next) => {
    Equipment.findEquipmentByOwner(req.params.owner_id)
        .then(equipments => {
            res.status(200).json(equipments)
        })
        .catch(next)
})

router.get('/:equipment_id', checkId, (req, res, next) => {
    console.log(req.params)
    const id = req.params.equipment_id
    Equipment.findEquipmentById(id)
        .then(equipment => {
            res.status(200).json(equipment)
        })
        .catch(next)
})

router.get('/owner/:owner_id', checkOwnerId, (req, res, next) => {
    // console.log(req.params)
    // const id = req.params.owner_id
    Equipment.findOwner(req.params.owner_id)
        .then(owner => {
            res.status(200).json(owner)
        })
        .catch(next)
})

router.post('/newlisting/:owner_id', checkOwnerId, (req, res, next) => {
    const prod = req.body
    console.log(prod)
    Equipment.createEquipment(prod)
        .then(equipment => {
            res.status(201).json(equipment)
        })
        .catch(next)
})

router.delete('/removelisting/:owner_id/:equipment_id', checkId, checkOwnerId, restrict, (req, res, next) => {
    const prodID = req.params.equipment_id
    const ownerID = req.params.owner_id
    Equipment.deleteEquipment(prodID, ownerID)
        .then(count => {
            if (count > 0) {
                res.status(201).json({ message: `listing deleted successfully` })
            } else {
                res.status(404).json({ message: `the listing with the specified ID could not be found` })
            }
        })
        .catch(next)
})

module.exports = router