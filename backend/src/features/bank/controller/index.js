class Bank {
    getIndex(req, res, next) {
        // if (!errors.isEmpty()) this.errorCodes.create422(res);

        res.json({status: "Bank System working"})
    }
}

module.exports = new Bank()
