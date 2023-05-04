const Skill = require('../models/skills')

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.name)
    })
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'new skill'})
}

function create(req, res) {
    const name = req.body.name
    const type = req.body.type
    const level = req.body.level
    const newSkill = {
        name,
        type,
        level
    }
    Skill.create(newSkill)
    res.redirect('/skills')
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.name)
    res.redirect('/skills')
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.name)
    res.render('skills/edit', {
        title: 'Edit Skill',
        skill
    })
}

function update(req, res) {
    Skill.update(req.params.name, req.body)
    res.redirect(`/skills/${req.params.name}`)
}

module.exports = {
    index,
    show,
    newSkill,
    create,
    deleteSkill,
    edit,
    update
}