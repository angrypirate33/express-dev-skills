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

module.exports = {
    getAll,
    getOne
}