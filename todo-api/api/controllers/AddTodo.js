'use strict'
const mongoose = require('mongoose')
const db = require('../../config/db')

const Todo = db.models.Todo

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

module.exports = {
  AddTodo: AddTodo
}