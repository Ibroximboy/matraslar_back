const model = require('./model')

module.exports = {
    ALL_CATEGORY: async(_, res) => {
        try {
            const category = await model.allcategory()
            res.send(category)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    ADD_CATEGORY: async(_, res) => {
        try {
            const { name, status_active } = req.body
            await model.addcategory(name, status_active)
            res.send("OK")
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}