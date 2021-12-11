const {Project} = require("../models")

const projectData = [
    {
        id: 1,
        title: "Vet's Best Friend",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1639035452/portfolio/landing_vvitmf.png",
        github: "https://github.com/Lemelisk27/vbf-front",
        site: "https://vetbestfriend.herokuapp.com/",
        UserId: 1
    },
    {
        id: 2,
        title: "Tech Blog",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1636442009/portfolio/qrjbjuxsur4j2drxavt2.png",
        github: "https://github.com/Lemelisk27/tech-blog",
        site: "https://vast-fjord-09411.herokuapp.com/",
        UserId: 1
    },
    {
        id: 3,
        title: "Regional Holiday Calendar",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1636339745/portfolio/avc75k72nwow2qkq54zo.png",
        github: "https://github.com/Lemelisk27/country-holiday",
        site: "https://lemelisk27.github.io/country-holiday/",
        UserId: 1
    },
    {
        id: 4,
        title: "Weather Dashboard",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1636339743/portfolio/hpr61takcpt72dcsjsop.png",
        github: "https://github.com/Lemelisk27/weather-dashboard",
        site: "https://lemelisk27.github.io/weather-dashboard/",
        UserId: 1
    },
    {
        id: 5,
        title: "Regex Tutorial - Gist",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637546026/portfolio/regex_rdoq5r.png",
        github: "https://gist.github.com/Lemelisk27/05f69dc4b57288ca3313ea1c3749a31e",
        site: "https://gist.github.com/Lemelisk27/05f69dc4b57288ca3313ea1c3749a31e",
        UserId: 1
    },
    {
        id: 6,
        title: "Note Taker",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637546370/portfolio/notes_rkdopt.png",
        github: "https://github.com/Lemelisk27/note-taker",
        site: "https://whispering-everglades-03607.herokuapp.com/",
        UserId: 1
    }
]

const seedProject = () => Project.bulkCreate(projectData)

module.exports = seedProject