'use strict'
const api = require('express').Router()
const db = require('../db')
const Campus = require('../db/models/campus')
const Student = require('../db/models/student')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/campuses', (req, res) => {
	Campus.findAll()
	.then(campuses => {
		res.json(campuses);
	})
	.catch(console.error);
})

api.get('/campuses/:campusId', (req, res) => {
	const id = req.params.campusId
	Campus.findOne({where: {
		id
	}})
	.then( (campus) => res.json(campus))
	.catch(console.error)
})

api.get('/campuses/:campusId/students', (req, res) => {
	const campusId = req.params.campusId
	Student.findAll({where: {
		campusId
	}})
	.then( (students) => res.json(students))
	.catch(console.error)
})

api.get('/students', (req, res) => {
	Student.findAll()
	.then( students => res.json(students))
	.catch(console.error)
})

api.get('/students/:studentId', (req, res) => {
	const id = req.params.studentId
	Student.findById(id)
	.then( student => res.json(student) )
	.catch(console.error)
})

api.post('/campuses/:campusId/', (req, res) => {
	Student.create(req.body)
	.then( student => res.json(student) )
	.catch(console.error)
})

api.post('/campuses/', (req, res) => {
	Campus.create(req.body)
	.then( campus => res.json(campus) )
	.catch(console.error)
})

api.put('/campuses/:campusId', (req, res) => {
	const id = req.params.campusId
	Campus.update(req.body, {where: {id}, returning: true })
	.then(console.log('update successful'))
})

api.put('/campuses/:campusId', (req, res) => {
	const id = req.params.campusId
	Campus.update(req.body, {where: {id}, returning: true })
	.then(console.log('update successful'))
})

api.put('/students/:studentId', (req, res) => {
	const id = req.params.studentId
	Student.update(req.body, {where: {id}, returning: true })
	.then(console.log('update successful'))
})


api.delete('/students/:studentId', (req, res) => {
	const id = req.params.studentId
	Student.destroy({where: {
		id
	}})
})

api.delete('/campuses/:campusId/', (req, res) => {
	const id = req.params.campusId
	Campus.destroy({where: {
		id
	}})
})


//use this if you wan't to make your code more modular:

// api.use('/students', require('./students'));
// api.use('/campuses', require('./campuses'));

// Make sure this is after all of
// the registered routes!
api.use(function (req, res) {
  res.status(404).end();
});


module.exports = api
