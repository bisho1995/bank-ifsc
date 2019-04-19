const pg = require('pg')
const {Client} = pg

const client = new Client({
    password: "password",
    user: "bisho",
    host: "0.0.0.0",
    database:"ifsc",
    port: 5433
});

client.connect()
    .then(()=>console.log("Connected to postgres", ))
    .catch(err=>console.log("COULD not connect to postgres ",err))

module.exports = client
