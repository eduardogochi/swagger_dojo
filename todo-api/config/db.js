'use strict'

const _ = require('lodash')
const glob = require('globule').find
const path = require('path')
const root = path.join(__dirname, '../')

const config = require('./all')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
config.dboptions.promiseLibrary = global.Promise

// set a keepAlive on our connection
_.set(config.dboptions, 'keepAlive', 120)

var db = mongoose.createConnection(config.dburi, config.dboptions)
db.on('error', function (err) {
  console.log('Mongoose connection error: : ', err)
})
db.once('open', function () {
  console.log('Opened database connection to %s', db.name)
})

glob('api/models/*.js', { srcBase: root }).forEach(function (filename) {
  require(`../${filename}`)(db, mongoose)
})

module.exports = db
