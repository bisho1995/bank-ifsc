const express = require("express")
const Router = express.Router

const branchRoutes = require("../features/branch/routes")

const router =new Router()

router.use("/branch",branchRoutes)

module.exports = router
