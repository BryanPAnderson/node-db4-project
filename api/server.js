const express = require("express");
const router = require("./router");
const server = express()

server.use(express.json())
server.use(router)

server.use((req, res ,next) => {
    res.json({
        message: "Welome to db4 api"
    })
    next()
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong"
    })
    next()
})

module.exports = server;