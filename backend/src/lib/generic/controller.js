const client = require("../../model/postgres/db")
class Controller {

    findWhere({select, table, where}) {
        const query = "SELECT $1::text from $2::text WHERE $3::text"
        const needle = [select, table, where]

        return client.query(query,needle)
    }
}

module.exports = Controller;
