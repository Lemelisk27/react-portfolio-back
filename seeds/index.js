const seedUsers = require("./user-seeds")
const seedProject = require("./project-seeds")
const seedImage = require("./image-seeds")

const sequelize = require("../config/connection")

const seedAll = async () => {
    await sequelize.sync({force: true})
    console.log('\n-----DATABASE SYNCED-----\n')
    await seedUsers()
    console.log('\n-----USERS SYNCED-----\n')
    await seedProject()
    console.log('\n-----PROJECTS SYNCED-----\n')
    await seedImage()
    console.log('\n-----IMAGES SYNCED-----\n')
    process.exit(0)
}

seedAll()