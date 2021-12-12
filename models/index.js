const User = require("./User")
const Project = require("./Project")
const Image = require("./Image")
const Resume = require("./Resume")
const Skill = require("./Skill")
const Experience = require("./Experience")
const Role = require("./Role")
const Education = require("./Education")
const Degree = require("./Degree")

User.hasMany(Project)

Project.belongsTo(User)

User.hasMany(Image)

Image.belongsTo(User)

User.hasMany(Resume, {
    onDelete: "CASCADE"
})

Resume.belongsTo(User)

Resume.hasMany(Skill, {
    onDelete: "CASCADE"
})

Skill.belongsTo(Resume)

Resume.hasMany(Experience, {
    onDelete: "CASCADE"
})

Experience.belongsTo(Resume)

Experience.hasMany(Role, {
    onDelete: "CASCADE"
})

Role.belongsTo(Experience)

Resume.hasMany(Education, {
    onDelete: "CASCADE"
})

Education.belongsTo(Resume)

Education.hasMany(Degree, {
    onDelete: "CASCADE"
})

Degree.belongsTo(Education)

module.exports = {
    User,
    Project,
    Image,
    Resume,
    Skill,
    Experience,
    Role,
    Education,
    Degree
}