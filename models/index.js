const User = require("./User")
const Project = require("./Project")
const Image = require("./Image")

User.hasMany(Project)

Project.belongsTo(User)

User.hasMany(Image)

Image.belongsTo(User)

module.exports = {
    User,
    Project,
    Image
}