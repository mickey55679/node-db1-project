const express = require("express");

const accountsRouter = require('./accounts/accounts-router');

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter);
// everything that starts with accounts will go to this accountsRouter. 

//This has to be the last one 

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found',
    })
})

module.exports = server;
