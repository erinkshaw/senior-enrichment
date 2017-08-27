'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is requeired everywhere

const Student = require('./student')
const Campus = require('./campus')
const User = require('./user')

Student.belongsTo(Campus)


// var data = {
//   student: [
//     {name: "Erin"},
//     {name: "Kimberly"},
//     {name: "Gabby"},
//     {name: "Jennifer" },
//     {name: "Michelle"},
//     {name: "Emily"},
//     {name: "Erika"},
//     {name: "Mieka"},
//   ],
//   campus: [
//     {name: "Gryffindor", imgUrl: 'https://www.hp-lexicon.org/wp-content/uploads/2015/08/shield_01-5B1-5D.jpg'},
//     {name: "Ravenclaw", imgUrl: 'https://www.hp-lexicon.org/wp-content/uploads/2015/08/shield_rav-200x0-c-default.jpg'},
//     {name: "Hufflepuff", imgUrl: 'https://vignette3.wikia.nocookie.net/harrypotter/images/e/e4/Hufflepuff.jpg/revision/latest?cb=20110817075555'},
//     {name: "Slytherin", imgUrl: 'http://vignette1.wikia.nocookie.net/harryalbuspotter/images/4/45/Slytherin_by_melisarodriguez-d47ly0k.png/revision/latest?cb=20140621170234'}
//   ],
// };

// data.campus.map( (campus) => {
// 	Campus.create(campus)
// 	.then(console.log('created' + campus))
// })

// data.student.map( (student) => {
// 	Student.create(student)
// 	.then(
//    (student) => {
//     let campus = Math.ceil(Math.random()*4)
//     student.setCampus(campus)
//   })
// }
// )



module.exports = {User, Campus, Student}
