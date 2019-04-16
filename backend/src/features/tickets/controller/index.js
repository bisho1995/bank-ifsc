const { validationResult } = require('express-validator/check');
class Tickets {
    getIndex(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) this.errorCodes.create422(res);

        res.json({status: "Ticket System working"})
    }
}

module.exports = new Tickets()
