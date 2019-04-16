const express= require("express")
const Router = express.Router
const router = new Router()
const controller = require("./controller")

router.route("/").get((...args)=>{controller.getIndex(...args)})

module.exports = router;
