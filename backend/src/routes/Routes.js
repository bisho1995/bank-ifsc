const express = require("express")
const Router = express.Router
const userRoutes = require('../features/users/routes')
const ticketRoutes = require("../features/tickets/routes")

const router =new Router()

router.use("/user", userRoutes)
router.use("/ticket", ticketRoutes)

module.exports = router
