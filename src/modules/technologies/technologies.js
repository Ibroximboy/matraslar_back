const model = require('./model')

module.exports = {
    ADD_TECHNOLOGIES: async(req, res) => {
        try {
            const { name, photo, title, video } = req.body
            await model.addtechnologies(name, photo, title, video)
            res.send("OK")
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    ALL_TECHNOLOGIES: async(_, res) => {
        try {
            const info = await model.alltechnologies()
            res.send(info)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}