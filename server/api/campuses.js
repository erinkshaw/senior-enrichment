const router = require('express').Router()
const Campus = require('../../db/models/campus')
const Student = require('../../db/models/student')

module.exports = router


router.get('/', (req, res, next) => {
	Campus.findAll()
	.then(campuses => {
		res.json(campuses);
	})
	.catch(next);
})

router.get('/:campusId', (req, res, next) => {
	const id = req.params.campusId
	Campus.findOne({where: {
		id
	}})
	.then( campus => res.json(campus))
	.catch(next)
})

router.get('/:campusId/students', (req, res, next) => {
	const campusId = req.params.campusId
	Student.findAll({where: {
		campusId
	}})
	.then( (students) => res.json(students))
	.catch(next)
})

router.post('/', (req, res, next) => {
	Campus.create(req.body)
	.then( campus => res.json(campus) )
	.catch(next)
})

router.put('/:campusId', (req, res, next) => {
	const id = req.params.campusId
	Campus.update(req.body, {where: {id}, returning: true })
	.then(console.log('update successful'))
	.catch(next)
})

router.delete('/:campusId/', (req, res, next) => {
	const id = req.params.campusId
	Campus.destroy({where: {
		id
	}, individualHooks: true })
	.catch(next)
})

