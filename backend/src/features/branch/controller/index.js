const client = require("../../../model/postgres/db")
const errorCodes = require("../../../lib/errorCodes/errorCodes")
class Branch{

    getBranchDetails(ifsc,res) {
        const query = `SELECT br.ifsc,ba.name as bank_name,br.district,br.branch,br.address,br.city,br.state  from branches br inner join banks ba on ba.id=br.bank_id where ifsc=$1`
        const needle = [ifsc]

        client.query(query,needle)
        .then(({rows})=>{
            if(rows.length)
                res.status(200).send({status: "success",payload: rows[0]})
            else res.status(400).send({status: "failure",message: "Could not find any results. The ifsc code does not exist`"})
        })
        .catch(err=> {
            console.log(err)
            errorCodes.create500(res)
        })
    }

    listBranches(bank,city, res){
        const query = `SELECT br.ifsc,ba.name as bank_name,br.district,br.branch,br.address,br.city,br.state  from branches br inner join banks ba on ba.id=br.bank_id where ba.name=$1 and br.city=$2`
        const needle = [bank,city]

        client.query(query,needle)
        .then(({rows})=>{
            if(rows.length)
                res.status(200).send({status: "success",payload: rows})
            else res.status(400).send({status: "failure",message: "Could not find any results. The bank name, city or both may be incorrect`"})
        })
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
        } else errorCodes.create422(res)
    }
}

module.exports = new Branch()
