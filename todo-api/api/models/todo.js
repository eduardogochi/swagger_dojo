'use strict'

exports = module.exports = function (db, mongoose) {
  const TodoSchema = new mongoose.Schema({
    todo_id: {type: Number, required: true },
    todo: {type: String, required: true},
    author: {type: String, required: false},
    completed: {type: Boolean, required: false},
    datecreated: {type: Date, required: false},
    duedate: {type: Date, required: false}
  })

  db.model('Todo', TodoSchema)
}
