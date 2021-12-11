const {Image} = require("../models")

const imageData = [
    {
        id: 1,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1639035452/portfolio/landing_vvitmf.png",
        UserId: 1
    },
    {
        id: 2,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636442009/portfolio/qrjbjuxsur4j2drxavt2.png",
        UserId: 1
    },
    {
        id: 3,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636339745/portfolio/avc75k72nwow2qkq54zo.png",
        UserId: 1
    },
    {
        id: 4,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636339743/portfolio/hpr61takcpt72dcsjsop.png",
        UserId: 1
    },
    {
        id: 5,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1637546026/portfolio/regex_rdoq5r.png",
        UserId: 1
    },
    {
        id: 6,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1637546370/portfolio/notes_rkdopt.png",
        UserId: 1
    }
]

const seedImage = () => Image.bulkCreate(imageData)

module.exports = seedImage