// 'use strict'
// const api = require('express').Router()
// const db = require('../db')
// const Campus = require('../db/models/campus')
// const Student = require('../db/models/student')


// api.get('/campuses/:campusId', (req, res) => {
// 	const id = req.params.campusId
// 	Campus.findOne({where: {
// 		id
// 	}})
// 	.then( (campus) => res.json(campus))
// 	.catch(console.error)
// })

// api.get('/campuses/:campusId/students', (req, res) => {
// 	const campusId = req.params.campusId
// 	Student.findAll({where: {
// 		campusId
// 	}})
// 	.then( (students) => res.json(students))
// 	.catch(console.error)
// })

// api.get('/campuses', (req, res) => {
// 	Campus.findAll()
// 	.then(campuses => {
// 		res.json(campuses);
// 	})
// 	.catch(console.error);
// })


// api.post('/students', (req, res) => {
// 	Student.create(req.body)
// 	.then( student => res.json(student) )
// 	.catch(console.error)
// })

// api.get('/students', (req, res) => {
// 	Student.findAll()
// 	.then( students => res.json(students))
// 	.catch(console.error)
// })


// api.get('/students/:studentId', (req, res) => {
// 	const id = req.params.studentId
// 	Student.findOne({where: {
// 		id
// 	}})
// 	.then( student => res.json(student) )
// 	.catch(console.error)
// })


// // api.delete('/campuses/:campusId/:studentId', (req, res) => {
// // 	const id = req.params.studentId
// // 	Student.destroy({where: {
// // 		id
// // 	}})
// // })

// api.delete('/students/:studentId', (req, res) => {
// 	const id = req.params.studentId
// 	Student.destroy({where: {
// 		id
// 	}})
// })


// //use this if you wan't to make your code more modular:

// // api.use('/students', require('./students'));
// // api.use('/campuses', require('./campuses'));

// // Make sure this is after all of
// // the registered routes!
// api.use(function (req, res) {
//   res.status(404).end();
// });


// module.exports = api
