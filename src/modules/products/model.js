const { fetch, fetchAll } = require('../../lib/connect')

const PRODUCT_ID = `
    SELECT
        *
    FROM
        products
    WHERE
        category_id = $1
`

const ALL_PRODUCTS = `
    SELECT
        *
    FROM
        products
`

const ADD_PRODUCT = `
INSERT INTO products(
    products_f_img, products_s_img, products_t_img, category_id, products_name, products_price, products_kg, products_size, products_garanty, products_place, products_description, products_action, products_new, status_active) 
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, true, $12);
`

const productbyid = (id) => fetchAll(PRODUCT_ID, id)
const productall = () => fetchAll(ALL_PRODUCTS)
const addproducts = (first_img, second_img, third_img, category, name, price, kg, size, garanty, place, description, action, status_active) => fetchAll(ADD_PRODUCT, first_img, second_img, third_img, category, name, price, kg, size, garanty, place, description, action, status_active)
 
module.exports = {
    productbyid,
    addproducts,
    productall
}