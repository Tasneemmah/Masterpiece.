const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'tasneem1998',
    host: 'localhost',
    port: 5432,
    database: 'postgres',

})


module.exports = pool;