const Equipment = require('./equipment-model.js');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../secrets');

// checks if token is present and checks token secret against config secret.
const restrict = (req,res,next) => {
    const token = req.headers.authorization

    if(!token){
        res.status(401).json("no token found")
    }else{
        jwt.verify(token, JWT_SECRET,(err,decoded)=>{
            if(err){
                res.status(401).json(err.message)
            }else{
                req.decodedToken = decoded
                next()
            }
        })
    }
}

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
    restrict
}