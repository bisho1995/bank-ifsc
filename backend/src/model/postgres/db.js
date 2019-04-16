const pg = require('pg')
const {Client} = pg

const client = new Client({
    password: "postgres",
    user: "postgres",
    host: "postgres",
});

client.connect()
    .then(()=>console.log("Connected to postgres", ))
    .catch(err=>console.log("could not connect to postgres ",err))

module.exports = client
