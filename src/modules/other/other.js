const model = require('./model')

module.exports = {
    INFO_TITLES: async(_, res) => {
        try {
            const info = await model.infotitles()
            res.send(info)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}