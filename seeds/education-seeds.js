const {Education} = require("../models")

const educationData = [
    {
        id: 1,
        name: "Bellevue College",
        ed_start_date: "2003-09-01",
        ed_end_date: "2006-03-01",
        ResumeId: 1
    },
    {
        id: 2,
        name: "University of Washington",
        ed_start_date: "2021-09-01",
        ed_end_date: "2021-12-01",
        ResumeId: 1
    }
]

const seedEducation = () => Education.bulkCreate(educationData)

module.exports = seedEducation