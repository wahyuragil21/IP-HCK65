const express = require("express")
const usersController = require("../controllers/usersController")
const users = express.Router()

users.post("/register", usersController.register)
users.post("/login", usersController.login)

module.exports = users