const { fetch, fetchAll } = require('../../lib/connect')

const LOG_IN = `
    SELECT 
        *
    FROM
        users
    WHERE
        users_login = $1
    AND
        users_password = $2
`

const login = (login, password) => fetchAll(LOG_IN, login , password)

module.exports = {
    login
}