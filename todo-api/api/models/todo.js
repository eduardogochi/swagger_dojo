'use strict'

exports = module.exports = function (db, mongoose) {
  const TodoSchema = new mongoose.Schema({
    // _id: { type: mongoose.Schema.Types.ObjectId },
    todo: {type: String, required: true},
    author: {type: String, required: false},
    completed: {type: Boolean, required: false},
    datecreated: {type: Date, required: false},
    duedate: {type: Date, required: false}
  })

  db.model('Todo', TodoSchema)
}
