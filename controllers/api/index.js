const router = require('express').Router()
const userRoutes = require("./user-routes")
const projectRoutes = require("./project-routes")
const imageRoutes = require("./image-routes")
const resumeRoutes = require("./resume-routes")

router.use("/users",userRoutes)
router.use("/projects",projectRoutes)
router.use("/images",imageRoutes)
router.use("/resumes",resumeRoutes)

module.exports = router