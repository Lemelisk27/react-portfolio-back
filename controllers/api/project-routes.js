const express = require('express');
const router = express.Router();
const {Project} = require("../../models")
const sequelize = require("../../config/connection")

router.get("/", (req, res) => {
    Project.findAll()
    .then(projectData=>{
        if (projectData) {
            res.json(projectData)
        }
        else {
            res.status(404).json({Message: "Nothing Found"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

module.exports = router