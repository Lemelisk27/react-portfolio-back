const {Degree} = require("../models")

const degreeData = [
    {
        id: 1,
        degree: "Associate of Arts - AA, General Studies",
        EducationId: 1
    },
    {
        id: 2,
        degree: "Web Development Certificate",
        EducationId: 2
    }
]

const seedDegrees = () => Degree.bulkCreate(degreeData)

module.exports = seedDegrees