const express = require('express')
const helmet = require('helmet');
const usersRouter = require('./users/users-router.js');
const equipmentRouter = require('./equipment/equipment-router.js')
const cors = require('cors');
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors())
server.use('/users', usersRouter);
server.use('/equipment', equipmentRouter)


server.get("/", (req, res) => {
    res.status(200).json({ api: "up" })
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;