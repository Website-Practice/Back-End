const router = require('express').Router()
const Users = require('./users-model.js')
const tokenBuilder = require('../middleware/tokenbuilder.js')
const bcrypt = require('bcryptjs')
const {
    checkId,
    confirmRegistration,
    checkUnique,
    validateLogin,
    confirmLogin,
    restrict
} = require('./users-middleware.js')

router.get('/', (req, res, next) => {
    Users.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(next)
})

router.get('/:user_id', checkId, restrict, (req, res, next) => {
    const id = req.params.user_id
    Users.getById(id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(next)
})

router.post('/register', checkUnique, confirmRegistration, (req, res, next) => {
    const { username,
        name,
        email_address,
        phone_number,
        address_line,
        address_state,
        address_city,
        zip_code,
        password } = req.body
    const hash = bcrypt.hashSync(password, 8)
    Users.createUser({
        username,
        name,
        email_address,
        phone_number,
        address_line,
        address_state,
        address_city,
        zip_code,
        password: hash
    })

        .then(user => {
            const token = tokenBuilder(user)
            res.status(201).json({user, token, message: "user successfully created"})
        })
        .catch(next)
})

router.post('/login', validateLogin, confirmLogin, (req, res, next) => {
    const { username } = req.body.username
    Users.getBy({ username })
        .then(([user]) => {
            const token = tokenBuilder(user)
            res.status(200).json({ user, token, message: "logged in successfully" })
        })
        .catch(next)

})

router.put('/:user_id', checkId, restrict, (req, res, next) => {
    const { username,
        name,
        email_address,
        phone_number,
        address_line,
        address_state,
        address_city,
        zip_code,
        password } = req.body
    const hash = bcrypt.hashSync(password, 8)
    Users.changeUser(req.params.user_id, {
        username,
        name,
        email_address,
        phone_number,
        address_line,
        address_state,
        address_city,
        zip_code,
        password: hash
    })
        .then(user => {
            res.status(200).json(user)
        })
        .catch(next)

})

router.delete('/:user_id', checkId, restrict, (req, res, next) => {
    Users.deleteUser(req.params.user_id)
        .then(user => {
            res.status(200).json({
                message: 'profile deleted'
            })
        })
        .catch(next)
})
module.exports = router