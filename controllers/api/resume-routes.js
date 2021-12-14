const express = require('express');
const router = express.Router();
const {Resume, Skill, Experience, Role, Education, Degree} = require("../../models")
const sequelize = require("../../config/connection");
const e = require('express');

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

router.get("/userresume/:id", (req, res) => {
    Resume.findOne({
        where: {
            UserId: req.params.id
        }
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
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.get("/skills/:id", (req, res) => {
    Skill.findAll({
        where: {
            ResumeId: req.params.id
        },
        order: ["id"]
    })
    .then(foundSkill=>{
        if (foundSkill) {
            res.json(foundSkill)
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

router.get("/experience/:id", (req, res) => {
    Experience.findAll({
        where: {
            ResumeId: req.params.id
        },
        attributes: {
            include: [[sequelize.fn('date_format', sequelize.col('start_date'), '%m-%Y'), 'start'],[sequelize.fn('date_format', sequelize.col('end_date'), '%m-%Y'), 'end']]
        },
        order: [["start_date", "DESC"]]
    })
    .then(foundExp=>{
        if (foundExp) {
            res.json(foundExp)
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

router.get("/roles/:id", (req, res) => {
    Role.findAll({
        where: {
            ExperienceId: req.params.id
        },
        order: ["id"]
    })
    .then(foundRoles=>{
        if (foundRoles) {
            res.json(foundRoles)
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

router.get("/education/:id", (req, res) => {
    Education.findAll({
        where: {
            ResumeId: req.params.id
        },
        attributes: {
            include: [[sequelize.fn('date_format', sequelize.col('ed_start_date'), '%m-%Y'), 'start'],[sequelize.fn('date_format', sequelize.col('ed_end_date'), '%m-%Y'), 'end']]
        },
        order: [["ed_start_date", "DESC"]]
    })
    .then(foundEdu=>{
        if (foundEdu) {
            res.json(foundEdu)
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

router.get("/degree/:id", (req, res) => {
    Degree.findAll({
        where: {
            EducationId: req.params.id
        },
        order: ["id"]
    })
    .then(foundDegree=>{
        if (foundDegree) {
            res.json(foundDegree)
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