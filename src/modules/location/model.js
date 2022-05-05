const { fetch, fetchAll } = require('../../lib/connect')

const ALL_LOCATIONS = `
    SELECT 
        *
    FROM
        locations
`

const ADD_LOCATION = `
    INSERT INTO locations(locations_img, locations_city, locations_description)
    VALUES($1, $2, $3)
`

const alllocations = () => fetchAll(ALL_LOCATIONS)
const addlocations = (img, location, description) => fetchAll(ADD_LOCATION, img, location, description)

module.exports = {
    alllocations,
    addlocations
}