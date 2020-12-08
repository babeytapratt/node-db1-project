const express = require("express");

const AccountRouter = require('./accounts/accounts-model');

const server = express();

server.use(express.json());

server.use("/api/accounts", AccountRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: 'hello' });
});

module.exports = server;
