'use strict'

module.exports = {
  GetAllTodos: GetAllTodos
}

function GetAllTodos(req, res, next){
  res.json([
    {
      todo_id: 0,
      todo: "Get some milk",
      author: "Jim",
      createddate: "2019-01-01T23:15:00.000Z",
      dueddate: "2019-01-08T23:15:00.000Z",
      completed: false
    },
    {
      todo_id: 1,
      todo: "Get cereal",
      author: "John",
      createddate: "2019-01-01T23:15:00.000Z",
      dueddate: "2019-01-08T23:15:00.000Z",
      completed: false
    }
  ])
}