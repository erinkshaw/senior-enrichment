'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
const Campus = require('./campus')


module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  wand: {
    type: Sequelize.STRING
  }
}, {
  defaultScope: {
    include: [
      { model: Campus}
    ]
  }
})
