const { fetch, fetchAll } = require('../../lib/connect')

const ALL_TECHNOLOGIES = `
    SELECT 
        *
    FROM
        technologies
`

const ADD_TECHNOLOGIES = `
    INSERT INTO technologies(technologies_i_name, technologies_img, technologies_v_name, technologies_video)
    VALUES($1, $2, $3, $4)
`

const alltechnologies = () => fetchAll(ALL_TECHNOLOGIES)
const addtechnologies = (name, photo, title, video) => fetchAll(ADD_TECHNOLOGIES, name, photo, title, video)

module.exports = {
    alltechnologies,
    addtechnologies
}