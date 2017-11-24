const router = require('express').Router()
const Student = require('../../db/models/student')

module.exports = router

router.get('/', (req, res, next) => {
	Student.findAll()
	.then( students => res.json(students))
	.catch(next)
})

router.get('/:studentId', (req, res, next) => {
	const id = req.params.studentId
	Student.findById(id)
	.then( student => res.json(student) )
	.catch(next)
})

router.post('/', (req, res, next) => {
	Student.create(req.body)
	.then( student => res.json(student) )
	.catch(next)
})

router.put('/:studentId', (req, res, next) => {
	const id = req.params.studentId
	Student.findById(id)
	.then((student) => student.update(req.body))
  .then(console.log('update successful'))
  .catch(next)
})

router.delete('/:studentId', (req, res, next) => {
	const id = req.params.studentId
	Student.destroy({where: {
		id
  }})
  .catch(next)
})
