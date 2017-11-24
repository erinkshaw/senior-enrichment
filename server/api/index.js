'use strict'
const api = require('express').Router()
const db = require('../../db')

api.use('/students', require('./students'));
api.use('/campuses', require('./campuses'));

// Make sure this is after all of
// the registered routes!
api.use(function (req, res) {
  res.status(404).end();
});


module.exports = api
