const express = require('express');
const router = express.Router();
const {Project} = require("../../models")
const sequelize = require("../../config/connection")
const tokenAuth = require("../../middleware/tokenAuth")

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

router.get("/:id", tokenAuth, (req, res) => {
    Project.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(foundProject=>{
        if (foundProject) {
            res.json(foundProject)
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

router.put("/", tokenAuth, (req, res) => {
    Project.update({
        UserId: req.body.UserId,
        github: req.body.github,
        img: req.body.img,
        site: req.body.site,
        title: req.body.title
    },
    {
        where: {
            id: req.body.id
        }
    })
    .then(updatedProject=>{
        res.json(updatedProject)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.post("/", tokenAuth, (req, res) => {
    Project.create({
        UserId: req.body.UserId,
        github: req.body.github,
        site: req.body.site,
        title: req.body.title
    })
    .then(newProject=>{
        res.json(newProject)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.delete("/:id", tokenAuth, (req, res) => {
    Project.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deletedProject=>{
        res.json(deletedProject)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

module.exports = router