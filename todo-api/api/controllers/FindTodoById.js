'use strict'
const mongoose = require('mongoose')
const db = require('../../config/db')

const Todo = db.models.Todo

const FindTodoById = (req, res) => {
  const todo_id = req.swagger.params.todo_id.value
  Todo
    .findOne({todo_id: todo_id})
    .then(todo => {
      res.status(200).json(todo)
    })
    .catch(err => {
      res.status(500)
    })
}

module.exports = {
  FindTodoById: FindTodoById
}
