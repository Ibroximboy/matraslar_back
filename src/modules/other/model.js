const { fetch, fetchAll } = require('../../lib/connect')

const INFO_TITLES = `
    SELECT
        *
    FROM
        info_title
`

const infotitles = () => fetchAll(INFO_TITLES)

module.exports = {
    infotitles
}