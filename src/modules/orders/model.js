const { fetch, fetchAll } = require('../../lib/connect')

const ALL_ORDERS = `
    SELECT 
        *
    FROM
        orders
`

const MAKE_AN_ORDER = `
    INSERT INTO orders(orders_name, orders_number, orders_product, orders_count, status_active)
    VALUES($1, $2, $3, $4, $5)
`

const allorders = () => fetchAll(ALL_ORDERS)
const makeanorder = (name, phone, product, count, status_active) => fetchAll(MAKE_AN_ORDER, name, phone, product, count, status_active)

module.exports = {
    allorders,
    makeanorder
}