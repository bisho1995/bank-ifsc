const errorCodes = require("../../../lib/errorCodes/errorCodes")
const Controller = require("../../../lib/generic/controller")
class Branch extends Controller {

    getBranchDetails(ifsc,res) {
        this.findWhere({select: "*",table: "postgres", where: `ifsc=${ifsc}`})
        .then(result=>console.log({result}))
        .catch(err=> {
            console.log(err)
            errorCodes.create500(res)
        })
    }

    listBranches(bank,city, res){
        this.findWhere({select: "*",table: "postgres", where: `bank=${bank} and city=${city}`})
        .then(result=>console.log({result}))
        .catch(err=> {
            console.log(err)
            errorCodes.create500(res)
        })
    }

    getIndex(req, res, next) {
        const {ifsc, bank, city} = req.query

        if(ifsc) {
            this.getBranchDetails(ifsc,res)
        } else if(bank && city) {
            this.listBranches(bank,city,res)
        }
        errorCodes.create422(res)
    }
}

module.exports = new Branch()
