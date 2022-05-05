const { fetch, fetchAll } = require('../../lib/connect')

const ALL_CUSTOMERS = `
    SELECT 
        *
    FROM
        customers
`

const MAKE_AN_CUSTOM = `
    INSERT INTO customers(customers_date, customers_phone, status_active)
    VALUES($1, $2, $3)
`

const allcustoms = () => fetchAll(ALL_CUSTOMERS)
const makeancustom = (date, phone, status_active) => fetchAll(MAKE_AN_CUSTOM, date, phone, status_active)

module.exports = {
    allcustoms,
    makeancustom
}