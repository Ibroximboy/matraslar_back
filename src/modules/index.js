const express = require('express')

const router = express.Router()

const login = require('./login/login')
const category = require('./category/category')
const products = require('./products/products')
const other = require('./other/other')
const orders = require('./orders/orders')
const customers = require('./customers/customers')
const technologies = require('./technologies/technologies')
const locations = require('./location/location')

router
    //Login
    .post('/login', login.LOG_IN)
    //Category
    .get('/category', category.ALL_CATEGORY)
    .post('/addcategory', category.ADD_CATEGORY)
    //Info titles
    .get('/infotitles', other.INFO_TITLES)
    //Products
    .get('/products', products.ALL_PRODUCTS)
    .get('/products/:id', products.PRODUCT_BY_ID)
    .post('/addproduct', products.ADD_PRODUCT)
    //Orders
    .get('/orders', orders.ALL_ORDERS)
    .post('/makeanorder', orders.MAKE_AN_ORDER)
    //Customers
    .get('/customers', customers.ALL_CUSTOMERS)
    .post('/makeancustomer', customers.MAKE_AN_CUSTOM)
    //Technologies
    .get('/technologies', technologies.ALL_TECHNOLOGIES)
    .post('/addtechnologies', technologies.ADD_TECHNOLOGIES)
    //Locations
    .get('/locations', locations.ALL_LOCATIONS)
    .post('/addlocations', locations.ADD_LOCATION)

module.exports = router