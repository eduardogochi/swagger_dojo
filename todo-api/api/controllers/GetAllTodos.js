'use strict'
const mongoose = require('mongoose')
const db = require('../../config/db')

const Todo = db.models.Todo

const GetAllTodos = (req, res) => {
  Todo
    .find({})
    .then(todos => {
      res.status(200).json(todos)
    })
    .catch(err => {
      res.status(500)
    })
}

module.exports = {
  GetAllTodos: GetAllTodos
}
