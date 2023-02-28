const {Client} = require('pg');

const client = new Client({
    user:"postgres",
    password:"swetha",
 connectionString: "postgres://postgres:swetha@localhost:5432/postgres",
 //ssl: true
});

module.exports = client