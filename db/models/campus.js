'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://vignette1.wikia.nocookie.net/harryalbuspotter/images/4/45/Slytherin_by_melisarodriguez-d47ly0k.png/revision/latest?cb=20140621170234'
  }
}, {
  hooks: {
    beforeDestroy: function(campus) {
      console.log('got to before destroy')
      db.model('student').destroy({
        where: {
        campusId: campus.id
      }})
    }
  }
})

// Campus.hook('beforeDestroy', (campus) => {
//   const campusId = campus.id
//   db.Student.destroy( { where: {campusId} } )
//   .then(console.log('successfully deleted students'))
//   .catch(console.error)
// })

module.exports = Campus
