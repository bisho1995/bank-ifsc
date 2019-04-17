class Branch {
    getIndex(req, res, next) {
        // if (!errors.isEmpty()) this.errorCodes.create422(res);

        res.json({status: "Branch System working"})
    }
}

module.exports = new Branch()
