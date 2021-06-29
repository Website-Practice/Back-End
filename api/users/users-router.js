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

})

router.get('/:user_id', checkId, (req, res, next) => {

})