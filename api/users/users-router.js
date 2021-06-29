const router = require('express').Router()
const Users = require('./users-model.js')
const {
    checkId,
    confirmRegistration,
    checkUnique,
    validateLogin,
    confirmLogin
} = require('./users-middleware.js')

router.get('/', (req, res, next) => {
    Users.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(next)
})

router.get('/:user_id', checkId, (req, res, next) => {
    const id = req.params.user_id
    Users.getById(id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(next)
})

module.exports = router