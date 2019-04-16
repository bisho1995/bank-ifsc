class Users {
 getIndex(req, res, next) {
    res.json({status: "Users working!!!"})
 }
}

module.exports = new Users()
