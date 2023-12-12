const express = require("express")
const BooksController = require("../controllers/booksController")
const usersController = require("../controllers/usersController")
const users = express.Router()

users.post("/register", usersController.register)

module.exports = users