const express = require('express')
const router = express.Router()
const skillController = require('../controllers/skills')

router.get('/', skillController.index)

router.get('/new', skillController.newSkill)

router.get('/:name', skillController.show)

router.get('/:name/edit', skillController.edit)

router.post('/', skillController.create)

router.delete('/:name', skillController.deleteSkill)

router.put('/:name', skillController.update)

module.exports = router