const express = require('express');
const router = express.Router();
const {Resume, Skill, Experience, Role, Education, Degree} = require("../../models")
const sequelize = require("../../config/connection")

router.get("/", (req, res) => {
    Resume.findAll({
        include: [{
            model: Skill
        },
        {
            model: Experience,
            include: [{
                model: Role,
                order: [["id", "ACS"]]
            }]
        },
        {
            model: Education,
            include: [Degree]
        }]
    })
    .then(foundResume=>{
        if (foundResume) {
            res.json(foundResume)
        }
        else {
            res.status(404).json({Message: "Nothing Found"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occurered", err:err})
    })
})

module.exports = router