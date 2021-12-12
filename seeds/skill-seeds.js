const {Skill} = require ("../models")

const skillData = [
    {
        id: 1,
        title: "Industry Knowledge",
        skills: "Programming, Web development, Web design, Time Management",
        ResumeId: 1
    },
    {
        id: 2,
        title: "Tools and Technologies",
        skills: "HTML, Cascading Style Sheets (CSS), JavaScript, Bootstrap, Git, API testing, React.js, MySQL, Express.js, Handlebars.js",
        ResumeId: 1
    },
    {
        id: 3,
        title: "Interpersonal Skills",
        skills: "Problem Solving, Customer Service, Creative Problem Solving, Critical Thinking, Teamwork",
        ResumeId: 1
    },
    {
        id: 4,
        title: "Other Skills",
        skills: "Independent Projects, Independent travel, CDL Class A, Truck driving",
        ResumeId: 1
    }
]

const seedSkills = () => Skill.bulkCreate(skillData)

module.exports = seedSkills