const express = require('express');
const router = express.Router();
const {Image} = require("../../models")
const sequelize = require("../../config/connection")

router.get("/", (req, res) => {
    Image.findAll()
    .then(imageData=>{
        if (imageData) {
            res.json(imageData)
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