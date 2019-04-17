const Controller = require("../../../lib/generic/controller")
class Branch extends Controller {

    getBranchDetails(ifsc,res) {
        this.findWhere({select: "*",table: "postgres", where: `ifsc=${ifsc}`})
        .then(result=>console.log({result}))
        .catch(err=>console.log({err}))
    }

    listBranches(bank,city, res){
        this.findWhere({select: "*",table: "postgres", where: `bank=${bank} and city=${city}`})
        .then(result=>console.log({result}))
        .catch(err=>console.log({err}))
    }

    getIndex(req, res, next) {
        const {ifsc, bank, city} = req.query

        if(ifsc) {
            this.getBranchDetails(ifsc,res)
        } else if(bank && city) {
            this.listBranches(bank,city,res)
        }
        res.json({status: "Branch System working"})
    }
}

module.exports = new Branch()
