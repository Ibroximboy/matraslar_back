const model = require('./model')

module.exports = {
    ADD_LOCATION: async(req, res) => {
        try {
            const { img, location, description } = req.body
            await model.addlocations(img, location, description)
            res.send("OK")
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    ALL_LOCATIONS: async(_, res) => {
        try {
            const info = await model.alllocations()
            res.send(info)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}