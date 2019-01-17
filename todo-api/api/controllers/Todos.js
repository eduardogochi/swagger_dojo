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

const AddTodo = (req, res) => {
  const data = req.body
  console.log('post data: ', data);
  Todo.create(data)
    .then(result => {
        console.log('The todo: ', result);
      return res.json(result)
    })
    .catch(err => {
      console.log('There was an error: ', err);
      res.status(500).send()
    })
}

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

const DeleteTodoById = (req, res) => {
  const todo_id = req.swagger.params.todo_id.value
  Todo
    .findOneAndRemove({todo_id: todo_id})
    .then(todo => {
      res.status(200).json(todo)
    })
    .catch(err => {
      res.status(500)
    })
}

module.exports = {
  GetAllTodos: GetAllTodos,
  AddTodo: AddTodo,
  FindTodoById: FindTodoById,
  DeleteTodoById: DeleteTodoById
}
