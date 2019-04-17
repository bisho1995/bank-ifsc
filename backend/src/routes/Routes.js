const express = require("express")
const Router = express.Router

const bankRoutes = require("../features/bank/routes")
const branchRoutes = require("../features/branch/routes")

const router =new Router()

router.use("/bank",bankRoutes)
router.use("/branch",branchRoutes)

module.exports = router
