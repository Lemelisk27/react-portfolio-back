const {Resume} = require ("../models")

const resumeData = [
    {
        id: 1,
        title: "Web Development",
        UserId: 1
    }
]

const seedResume = () => Resume.bulkCreate(resumeData)

module.exports = seedResume