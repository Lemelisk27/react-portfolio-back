const express = require('express');
const router = express.Router();
const {User} = require("../../models")
const sequelize = require("../../config/connection")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const tokenAuth = require("../../middleware/tokenAuth")

router.get("/", (req, res) => {
    User.findAll({
        attributes: {
            exclude: ["password"]
        }
    })
    .then(userData=>{
        if (userData) {
            res.json(userData)
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

router.post("/login", (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(foundUser=>{
        if (!foundUser) {
            res.status(401).json({Message: "Incorrect Username or Password"})
        }
        else if (bcrypt.compareSync(req.body.password,foundUser.password)) {
            const token = jwt.sign({
                username: foundUser.username,
                id: foundUser.id
            },
            process.env.JWT_SECRET
            ,{
                expiresIn: "2h"
            })
            res.json({
                token: token,
                user: foundUser
            })
        }
        else {
            res.status(401).json({Message: "Incorrect Username or Password"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.put("/", tokenAuth, (req, res) => {
    User.update({
        about: req.body.about,
        city: req.body.city,
        email: req.body.email,
        first_name: req.body.first_name,
        github: req.body.github,
        last_name: req.body.last_name,
        linkedin: req.body.linkedin,
        phone: req.body.phone,
        portfolio: req.body.portfolio,
        state: req.body.state,
        street: req.body.street,
        zip: req.body.zip
    },
    {
        where: {
            id: req.body.id,
        }
    })
    .then(updatedUser=>{
        res.json(updatedUser)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.post("/password", tokenAuth, (req, res) => {
    const newPassword = bcrypt.hashSync(req.body.new_password,10)
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(foundUser=>{
        if (bcrypt.compareSync(req.body.password,foundUser.password)) {
            User.update({
                password: newPassword
            },
            {
                where: {
                    id: foundUser.id
                }
            })
            .then(updatedPwd=>{
                res.json(updatedPwd)
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({Message: "An Error Occured", err:err})
            })
        }
        else {
            res.status(401).json({Message: "Incorrect Username or Password"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

module.exports = router