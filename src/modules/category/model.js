const { fetch, fetchAll } = require('../../lib/connect')

const ALL_CATEGORY = `
    SELECT
        *
    FROM
        category
`

const ADD_CATEGORY = `
    INSERT INTO category(category_name, status_active) VALUES($1, $2)
`

const allcategory = () => fetchAll(ALL_CATEGORY)
const addcategory = (name, status_active) => fetchAll(ADD_CATEGORY, name, status_active)

module.exports = {
    allcategory,
    addcategory
}