const { Pool } = require('pg')
const PORT = process.env.PORT || 5000;
const pool = new Pool({
    connectionString: 'postgres://axvurlnw:KIEBQtpLoPG8_dZEVkP_0l_xALW12VSc@satao.db.elephantsql.com/axvurlnw'
})
const SECRET_KEY = 'SECRET_KEY'

module.exports = {
    PORT,
    pool,
    SECRET_KEY
}