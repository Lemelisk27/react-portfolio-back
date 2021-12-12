const {User} = require("../models")

const userData = [
    {
        id: 1,
        first_name: "Zach",
        last_name: "Smith",
        username: "Lemelisk27",
        password: "password",
        street: "23403 SE 262nd ST",
        city: "Maple Valley",
        state: "WA",
        zip: 98038,
        phone: "425-698-5340",
        email: "Lemelisk27@gmail.com",
        linkedin: "http://www.linkedin.com/in/Lemelisk27",
        github: "https://github.com/Lemelisk27",
        portfolio: "https://lemelisk27.herokuapp.com/",
        about: "I recently obtained my Web Development Certificate from the University of Washington. My years as a long distance truck driver have given me the ability to work independently, with minimal supervision, while still completing goals and deadlines. When I worked for the IRS, it gave me the ability to work in a diverse environment with people from all walks of life.",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1639277645/portfolio/016_pfjrdb.jpg"
    }
]

const seedUsers = () => User.bulkCreate(userData,{individualHooks:true})

module.exports = seedUsers