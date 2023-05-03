const skills = [
    {
        name: 'coding',
        type: 'hard',
        level: 'intermediate'
    }, 
    {
        name: 'problem solving',
        type: 'soft',
        level: 'advanced'
    },
    {
        name: 'teamwork',
        type: 'soft',
        level: 'beginner'
    }
]

function getAll() {
    return skills
}

function getOne(name) {
    return skills.find(skill => skill.name === name)
}

function deleteOne(name) {
    const idx = skills.findIndex(skill => skill.name === name)
    skills.splice(idx, 1)
}

function update(name, updatedSkill) {
    const skill = skills.find(skill => skill.name === name)
    Object.assign(skill, updatedSkill)
}

module.exports = {
    getAll,
    getOne,
    deleteOne
}